import Button from "./Button";
import { ButtonProps } from "./Button";

const PrimaryButton = ({ children, className = "", ...props }: ButtonProps) => {
  return (
    <Button
      className={`
        bg-blue-600 hover:bg-blue-700
        focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        ${className}
      `}
      {...props}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
