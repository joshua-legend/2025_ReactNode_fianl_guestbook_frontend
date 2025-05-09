"use client";
import PrimaryButton from "@/components/Common/Bases/Buttons/PrimaryButton";
import InputField from "@/components/Common/Bases/InputField";
import { useRouter } from "next/navigation";
import { useState } from "react";
import type { LoginForm } from "./types/login.type";
import { login } from "@/apis/auth/loginAPI";
import { useAuthStore } from "@/store/auth";
export default function LoginForm() {
  const { setAuth } = useAuthStore();
  const router = useRouter();
  const [formData, setFormData] = useState<LoginForm>({
    username: "",
    password: "",
  });

  const updateField = (name: keyof LoginForm, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    const data = await login(formData.username, formData.password);
    if (data.success) {
      setAuth(data.data?.username || "", data.data?.accessToken || "");
      router.push("/");
    } else {
      alert(data?.message.message);
    }
  };

  return (
    <div className="flex flex-col gap-4 w-full max-w-sm mx-auto p-4 bg-white rounded-lg shadow-sm">
      <div className="flex flex-col gap-2">
        <InputField type="text" placeholder="아이디" value={formData.username} onChange={(value) => updateField("username", value)} />
        <InputField type="password" placeholder="비밀번호" value={formData.password} onChange={(value) => updateField("password", value)} />
      </div>
      <PrimaryButton onClick={handleSubmit}>로그인</PrimaryButton>
    </div>
  );
}
