// app/components/Common/ClientProviders.tsx
"use client";

import { useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import api from "@/apis/common/apiClient";
import { API_ENDPOINTS } from "@/apis/common/apiEndpoints";
import { useAuthStore } from "@/store/auth";

export default function ClientProviders() {
  const { setAccessToken, setAuthOff, setAuth } = useAuthStore();

  useEffect(() => {
    (async () => {
      try {
        // Silent Refresh: 쿠키 기반 리프레시 호출
        const { data } = await api.post(API_ENDPOINTS.AUTH.REFRESH_TOKEN);
        if (data.success && data.data.accessToken) {
          setAccessToken(data.data.accessToken);
          setAuth(data.data?.username || "", data.data?.accessToken || "");
        } else {
          throw new Error("토큰 재발급 실패");
        }
      } catch (err) {
        // 재발급 실패 → 로그아웃 + 토스트 알림 + (원하면 리디렉션)
        toast.error("세션이 만료되었습니다. 다시 로그인해주세요.");
        setAuthOff();
      }
    })();
  }, [setAccessToken, setAuthOff]);

  // 전역 토스트 컨테이너 렌더링
  return <ToastContainer position="top-right" autoClose={3000} />;
}
