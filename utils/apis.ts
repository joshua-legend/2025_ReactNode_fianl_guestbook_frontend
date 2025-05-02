import { useAuthStore } from "@/store/authStore";
import axios, { AxiosError } from "axios";
import { API_BASE_URL, API_ENDPOINTS } from "./apiEndpoints";
import { ApiResponse, ApiError, ERROR_HOCS } from "./api.type";
import { AuthResponse } from "@/components/LoginForm/types/login.type";
import { SignUpResponse } from "@/components/SignUpForm/types/signup.type";
import { Guestbook } from "@/components/Guestbook/types/guestbook.type";
import createAuthRefreshInterceptor from "axios-auth-refresh";

// 서버 만드는곳!
const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const accessToken = useAuthStore.getState().accessToken;
  console.log("시작", { accessToken });
  if (accessToken) config.headers.Authorization = `Bearer ${accessToken}`;
  return config;
});

const refreshAuthLogic = async (failedRequest: any) => {
  try {
    const response = await api.post(API_ENDPOINTS.AUTH.REFRESH_TOKEN);
    const { accessToken } = response.data.data;
    useAuthStore.getState().setAccessToken(accessToken);
    api.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
    failedRequest.config.headers["Authorization"] = `Bearer ${accessToken}`;
    console.log("리프레시 성공", response);
    return Promise.resolve();
  } catch (error) {
    // ★ 리프레시 불가 시에는 무조건 reject
    console.log("리프레시 불가", error);
    return Promise.reject(error);
  }
};

createAuthRefreshInterceptor(api, refreshAuthLogic, {
  statusCodes: [401],
});

api.interceptors.response.use(
  (res) => res,
  (err) => Promise.reject(err)
);

export const getGuestbook = async () => {
  try {
    const { data } = await api.get<ApiResponse<Guestbook[]>>(API_ENDPOINTS.GUESTBOOK.LIST);
    return data;
  } catch (err) {
    const axiosErr = err as AxiosError<ApiError>;
    return axiosErr.response?.data || ERROR_HOCS;
  }
};

export const login = async (username: string, password: string) => {
  try {
    const { data } = await api.post<ApiResponse<AuthResponse>>(API_ENDPOINTS.AUTH.LOGIN, {
      username,
      password,
    });
    return data;
  } catch (err) {
    const axiosErr = err as AxiosError<ApiError>;
    return axiosErr.response?.data || ERROR_HOCS;
  }
};

export const register = async (username: string, password: string) => {
  try {
    const { data } = await api.post<ApiResponse<SignUpResponse>>(API_ENDPOINTS.AUTH.SIGNUP, {
      username,
      password,
    });
    return data;
  } catch (err) {
    const axiosErr = err as AxiosError<ApiError>;
    return axiosErr.response?.data || ERROR_HOCS;
  }
};

export const write = async (title: string, content: string) => {
  try {
    const { data } = await api.post<ApiResponse<SignUpResponse>>(API_ENDPOINTS.GUESTBOOK.CREATE, {
      title,
      content,
    });
    return data;
  } catch (err) {
    throw err;
  }
};

export default api;
