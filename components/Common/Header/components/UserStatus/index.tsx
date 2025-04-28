import DangerButton from "@/components/Common/Bases/Buttons/DangerButton";

interface UserStatusProps {
  name: string;
  onLogout: () => void;
}

export default function UserStatus({ name, onLogout }: UserStatusProps) {
  return (
    <div className="flex items-center space-x-2">
      <span className="text-gray-700">{name}님 환영합니다! </span>
      <DangerButton onClick={onLogout}>로그아웃</DangerButton>
    </div>
  );
}
