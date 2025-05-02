// API 기본 URL
export const API_BASE_URL = "http://localhost:3001";

export interface ApiResponse<T> {
  statusCode: number;
  success: true;
  message: string;
  data: T;
  path?: string;
  timestamp?: string;
}

export interface ErrorResponse {
  statusCode: number;
  success: boolean;
  message: {
    message: string;
    error: string;
    statusCode: number;
  };
  data: null;
  path: string;
  timestamp: string;
}

// API 엔드포인트
export const API_ENDPOINTS = {
  // 인증 관련
  AUTH: {
    LOGIN: "/api/auth/login",
    LOGOUT: "/api/auth/logout",
    SIGNUP: "/api/auth/signup",
    REFRESH_TOKEN: "/api/auth/refresh",
  },

  // 방명록 관련
  GUESTBOOK: {
    LIST: "/api/guestbooks",
    CREATE: "/api/guestbooks",
    DETAIL: (id: string) => `/api/guestbooks/${id}`,
    UPDATE: (id: string) => `/api/guestbooks/${id}`,
    DELETE: (id: string) => `/api/guestbooks/${id}`,
  },
} as const;
