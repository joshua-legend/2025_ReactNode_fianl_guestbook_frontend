import { create } from "zustand";
import axios from "axios";

interface AuthState {
  isAuthenticated: boolean;
  username: string;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isAuthenticated: false,
  username: "",

  login: async (username: string, password: string) => {
    try {
      const response = await axios.post("/api/auth/login", {
        username,
        password,
      });
      if (response.data.success) {
        set({ isAuthenticated: true, username });
        return true;
      }
      return false;
    } catch (err) {
      return false;
    }
  },

  logout: () => {
    set({ isAuthenticated: false, username: "" });
  },
}));
