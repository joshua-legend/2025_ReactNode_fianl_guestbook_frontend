"use client";

import Heading from "@/components/Common/Bases/Typography/Heading";
import LoginForm from "@/components/LoginForm";

const LoginPage = () => {
  return (
    <div className="max-w-2xl mx-auto text-center">
      <Heading>로그인</Heading>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
