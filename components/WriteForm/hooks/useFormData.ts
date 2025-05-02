"use client";

import { useState } from "react";

export const useWriteFormData = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  const handleChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return { formData, handleChange };
};
