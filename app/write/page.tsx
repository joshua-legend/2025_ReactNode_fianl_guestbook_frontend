"use client";
import Heading from "@/components/Common/Bases/Typography/Heading";
import WriteForm from "@/components/WriteForm";
import { useAuthStore } from "@/store/auth";
import { redirect } from "next/navigation";

const WritePage = () => {
  const { isAuthenticated } = useAuthStore();
  if (!isAuthenticated) redirect("/login");

  return (
    <div className="max-w-2xl mx-auto">
      <Heading>방명록 작성</Heading>
      <WriteForm />
    </div>
  );
};

export default WritePage;
