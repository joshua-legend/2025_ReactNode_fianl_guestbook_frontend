import { create } from "zustand";
import { login as apiLogin } from "../utils/apis";

interface AuthState {
  isAuthenticated: boolean;
  username: string;
  accessToken: string | null;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
  setAccessToken: (token: string) => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  username: "",
  accessToken: null,

  login: async (username: string, password: string) => {
    try {
      const result = await apiLogin(username, password);

      // 로그인 성공 시
      if (result.success) {
        const { accessToken, username: responseUsername } = result.data;
        set({
          isAuthenticated: true,
          username: responseUsername,
          accessToken,
        });
        console.log(accessToken);
        return true;
      }

      // 로그인 실패 시
      return false;
    } catch (error) {
      console.error("Login error:", error);
      return false;
    }
  },

  logout: () => {
    set({
      isAuthenticated: false,
      username: "",
      accessToken: null,
    });
  },

  setAccessToken: (token: string) => {
    set({ accessToken: token });
  },
}));
