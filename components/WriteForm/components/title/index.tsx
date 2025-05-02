"use client";

interface TitleProps {
  value: string;
  onChange: (value: string) => void;
}

const Title = ({ value, onChange }: TitleProps) => {
  return (
    <div className="mb-6">
      <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
        제목
      </label>
      <input
        type="text"
        id="title"
        name="title"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        required
        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="제목을 입력하세요"
      />
    </div>
  );
};

export default Title;
