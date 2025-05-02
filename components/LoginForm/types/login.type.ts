export interface LoginForm {
  username: string;
  password: string;
}
// 인증 관련 응답 타입

export interface AuthResponse {
  accessToken: string;
  message: string;
  username: string;
}
