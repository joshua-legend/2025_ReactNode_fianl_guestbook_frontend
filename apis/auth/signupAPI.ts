import api from "../common/apiClient";
import { API_ENDPOINTS, ApiResponse, ErrorResponse } from "../common/apiEndpoints";
import { handleAxiosError } from "../common/networkError";

interface SignUpResponse {
  data: any;
  message: string;
}

export const signup = async (username: string, password: string) => {
  try {
    const response = await api.post<ApiResponse<SignUpResponse>>(API_ENDPOINTS.AUTH.SIGNUP, {
      username,
      password,
    });
    return response.data;
  } catch (err) {
    return handleAxiosError(err);
  }
};
