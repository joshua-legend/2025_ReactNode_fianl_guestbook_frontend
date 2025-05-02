"use client";
import Heading from "@/components/Common/Bases/Typography/Heading";
import WriteForm from "@/components/WriteForm";
import { useAuthStore } from "@/store/auth";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

const WritePage = () => {
  const router = useRouter();
  const { isAuthenticated } = useAuthStore();

  useEffect(() => {
    if (!isAuthenticated) {
      router.push("/login");
    }
  }, [isAuthenticated, router]);

  return (
    <div className="max-w-2xl mx-auto">
      <Heading>방명록 작성</Heading>
      <WriteForm />
    </div>
  );
};

export default WritePage;
