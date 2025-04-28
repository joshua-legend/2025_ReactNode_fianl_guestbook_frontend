"use client";
import PrimaryButton from "@/components/Common/Bases/Buttons/PrimaryButton";
import InputField from "@/components/Common/Bases/InputField";
import { useLoginForm } from "@/components/LoginForm/hooks/useLoginForm";
import { useAuthStore } from "@/store/authStore";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface LoginFormData {
  username: string;
  password: string;
}

export default function LoginForm() {
  const router = useRouter();
  const { login } = useAuthStore();
  const [formData, setFormData] = useState<LoginFormData>({
    username: "",
    password: "",
  });

  const updateField = (name: keyof LoginFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    const result = await login(formData.username, formData.password);
    if (result) {
      router.push("/");
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
