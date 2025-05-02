"use client";

interface ContentProps {
  value: string;
  onChange: (value: string) => void;
}

const Content = ({ value, onChange }: ContentProps) => {
  return (
    <div className="mb-6">
      <label htmlFor="content" className="block text-sm font-medium text-gray-700 mb-2">
        내용
      </label>
      <textarea
        id="content"
        name="content"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
        rows={5}
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="방명록 내용을 입력해주세요"
      />
    </div>
  );
};

export default Content;
