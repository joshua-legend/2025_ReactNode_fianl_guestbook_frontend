import { useState } from "react";

export const useForm = () => {
  const [formData, setFormData] = useState({
    author: "",
    content: "",
  });

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return { formData, handleChange };
};
