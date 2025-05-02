import Content from "./components/content";
import Submit from "./components/submit";
import Title from "./components/title";
import { useWriteFormData } from "./hooks/useFormData";

const WriteForm = () => {
  const { formData, handleChange } = useWriteFormData();

  return (
    <div className="max-w-2xl mx-auto">
      <Title value={formData.title} onChange={(value) => handleChange("title", value)} />
      <Content value={formData.content} onChange={(value) => handleChange("content", value)} />
      <Submit formData={formData} />
    </div>
  );
};

export default WriteForm;
