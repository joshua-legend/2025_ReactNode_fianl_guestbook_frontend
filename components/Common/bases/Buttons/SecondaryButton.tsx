import Button from "./Button";
import { ButtonProps } from "./Button";

const SecondaryButton = ({ children, className = "", ...props }: ButtonProps) => {
  return (
    <Button
      className={`
        bg-gray-600 hover:bg-gray-700
        focus:ring-2 focus:ring-gray-500 focus:ring-offset-2
        ${className}
      `}
      {...props}
    >
      {children}
    </Button>
  );
};

export default SecondaryButton;
