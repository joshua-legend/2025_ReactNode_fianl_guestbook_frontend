import { AxiosError } from "axios";
import { ErrorResponse } from "./apiEndpoints";

interface NetworkErrorResponse {
  success: false;
  message: {
    message: string;
    error: string;
    statusCode: number;
  };
  data: null;
}

const createNetworkErrorResponse = (): NetworkErrorResponse => ({
  success: false,
  message: {
    message: "네트워크 에러가 발생했습니다.",
    error: "NetworkError",
    statusCode: 500,
  },
  data: null,
});

export const handleAxiosError = (err: unknown): ErrorResponse | NetworkErrorResponse => {
  const axiosError = err as AxiosError<ErrorResponse>;
  return axiosError.response?.data || createNetworkErrorResponse();
};
