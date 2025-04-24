"use client";
import InputField from "@/components/Common/bases/InputField";
import { useForm } from "@/components/Common/Header/hooks/useForm";

export default function LoginForm() {
  const { formData, handleChange } = useForm();

  return (
    <div>
      <InputField type="text" placeholder="아이디" value={formData.username} onChange={(value) => handleChange("username", value)} />
      <InputField type="password" placeholder="비밀번호" value={formData.password} onChange={(value) => handleChange("password", value)} />
      <button className="px-4 py-1 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">로그인</button>
    </div>
  );
}
