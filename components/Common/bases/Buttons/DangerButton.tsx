import Button from "./Button";
import { ButtonProps } from "./Button";

const DangerButton = ({ children, className = "", ...props }: ButtonProps) => {
  return (
    <Button
      className={`
        bg-red-600 hover:bg-red-700
        focus:ring-2 focus:ring-red-500 focus:ring-offset-2
        ${className}
      `}
      {...props}
    >
      {children}
    </Button>
  );
};

export default DangerButton;
