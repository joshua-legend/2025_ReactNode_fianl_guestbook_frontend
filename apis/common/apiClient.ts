import axios, { AxiosError } from "axios";
import { API_BASE_URL, API_ENDPOINTS } from "./apiEndpoints";
import { useAuthStore } from "@/store/auth";
import createAuthRefreshInterceptor from "axios-auth-refresh";
import { toast } from "react-toastify";

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use((config) => {
  const { accessToken } = useAuthStore.getState();
  console.log(accessToken);
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

// 3) Refresh Logic 정의
const refreshAuthLogic = async (failedRequest: AxiosError) => {
  try {
    // (1) 인터셉터 없는 전용 client를 쓰시는 게 좋습니다.
    const { data } = await axios.post(`${API_BASE_URL}${API_ENDPOINTS.AUTH.REFRESH_TOKEN}`, {}, { withCredentials: true });
    if (!data.success) throw new Error(data.message.message || "Refresh 토큰이 만료되었습니다.");
    const newToken = data.data.accessToken;
    useAuthStore.getState().setAccessToken(newToken);
    if (failedRequest.config?.headers) {
      failedRequest.config.headers.Authorization = `Bearer ${newToken}`;
    }

    return Promise.resolve();
  } catch (err) {
    toast.error("세션이 만료되었습니다. 다시 로그인해주세요.");
    useAuthStore.getState().setAuthOff();

    return Promise.reject(err);
  }
};

createAuthRefreshInterceptor(api, refreshAuthLogic, {
  statusCodes: [401],
});

export default api;
