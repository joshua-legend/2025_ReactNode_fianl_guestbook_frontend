import { create } from "zustand";

interface AuthState {
  isAuthenticated: boolean;
  username: string;
  accessToken: string | null;
  setAccessToken: (accessToken: string) => void;
  setAuth: (username: string, accessToken: string) => void;
  setAuthOff: () => void;
  getAll: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  username: "",
  accessToken: null,
  setAccessToken: (accessToken: string) => {
    set({ accessToken });
  },
  setAuth: (username: string, accessToken: string) => {
    set({
      isAuthenticated: true,
      username: username,
      accessToken,
    });
  },
  setAuthOff: () => {
    set({
      isAuthenticated: false,
      username: "",
      accessToken: null,
    });
  },
  getAll: () => {
    return {
      isAuthenticated: useAuthStore.getState().isAuthenticated,
      username: useAuthStore.getState().username,
      accessToken: useAuthStore.getState().accessToken,
    };
  },
}));
