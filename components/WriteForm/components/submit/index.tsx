"use client";
import { write } from "@/utils/apis";
import { useRouter } from "next/navigation";

interface SubmitProps {
  formData: {
    title: string;
    content: string;
  };
}

const Submit = ({ formData }: SubmitProps) => {
  const router = useRouter();
  const handleSubmit = async () => {
    try {
      await write(formData.title, formData.content);
      router.push("/");
    } catch (err) {
      console.error("API Error:", err);
      alert("로그인 기간이 만료되었습니다. 다시 로그인 해주세요.");
      router.push("/login");
    }
  };

  return (
    <div className="flex justify-end space-x-4">
      <button onClick={() => console.log(formData)}>테스트</button>
      <button type="button" onClick={() => router.push("/")} className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50">
        취소
      </button>
      <button onClick={handleSubmit} type="button" className="px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
        등록
      </button>
    </div>
  );
};

export default Submit;
