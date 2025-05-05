import api from "../common/apiClient";
import { API_ENDPOINTS, ApiResponse, ErrorResponse } from "../common/apiEndpoints";
import { handleAxiosError } from "../common/networkError";

interface LogOutResponse {
  data: null;
  message: string;
}

export const logout = async () => {
  try {
    const response = await api.post<ApiResponse<LogOutResponse>>(API_ENDPOINTS.AUTH.LOGOUT);
    return response.data;
  } catch (err) {
    return handleAxiosError(err);
  }
};
