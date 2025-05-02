"use client";

import Heading from "@/components/Common/Bases/Typography/Heading";
import LoginForm from "@/components/LoginForm";
import { useAuthStore } from "@/store/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const LoginPage = () => {
  const router = useRouter();
  const { isAuthenticated } = useAuthStore();

  useEffect(() => {
    if (isAuthenticated) {
      router.push("/");
    }
  }, [isAuthenticated, router]);

  return (
    <div className="max-w-2xl mx-auto text-center">
      <Heading>로그인</Heading>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
