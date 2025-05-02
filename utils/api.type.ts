// API 응답 타입

export interface ApiResponse<T> {
  success: true;
  data: T;
  message?: string;
}

// API 에러 타입
export interface ApiError {
  success: false;
  message: string;
  error: {
    error: string;
    message: string[];
    statusCode: number;
  };
  statusCode?: number;
  timestamp?: string;
}
export const ERROR_HOCS: ApiError = {
  success: false,
  message: "Network or timeout error",
  error: {
    error: "NETWORK_ERROR",
    message: ["Network or timeout error"],
    statusCode: 500,
  },
};
