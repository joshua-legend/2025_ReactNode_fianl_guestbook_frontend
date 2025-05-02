import api from "../common/apiClient";
import { API_ENDPOINTS, ApiResponse, ErrorResponse } from "../common/apiEndpoints";
import { handleAxiosError } from "../common/networkError";

interface LoginResponse {
  accessToken: string;
  username: string;
}

export const login = async (username: string, password: string) => {
  try {
    const response = await api.post<ApiResponse<LoginResponse>>(API_ENDPOINTS.AUTH.LOGIN, {
      username,
      password,
    });
    return response.data;
  } catch (err) {
    return handleAxiosError(err);
  }
};
