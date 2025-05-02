"use client";
import PrimaryButton from "@/components/Common/Bases/Buttons/PrimaryButton";
import InputField from "@/components/Common/Bases/InputField";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { SignUpFormData } from "./types/signup.type";
import { signup } from "@/apis/auth/signupAPI";
export default function SignUpForm() {
  const router = useRouter();
  const [formData, setFormData] = useState<SignUpFormData>({
    username: "",
    password: "",
  });

  const updateField = (name: keyof SignUpFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    const data = await signup(formData.username, formData.password);
    if (data.success) {
      alert(data.data?.message);
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
      <PrimaryButton onClick={handleSubmit}>회원가입</PrimaryButton>
    </div>
  );
}
