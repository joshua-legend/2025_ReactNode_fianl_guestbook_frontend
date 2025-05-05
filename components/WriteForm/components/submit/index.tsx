"use client";
import { postGuestbook } from "@/apis/guestbooks/guestbookAPI";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

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
      const response = await postGuestbook(formData.title, formData.content);
      response?.data?.success && router.push("/");
    } catch (err) {
      toast.error("등록에 실패했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div className="flex justify-end space-x-4">
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
