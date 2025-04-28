import Heading from "@/components/Common/Bases/Typography/Heading";
import RegisterForm from "@/components/RegisterForm";

const RegisterPage = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <Heading>방명록 작성</Heading>
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
