import Heading from "@/components/Common/Bases/Typography/Heading";
import SignUpForm from "@/components/SignUpForm";

const SingUpPage = () => {
  return (
    <div className="max-w-2xl mx-auto">
      <Heading>회원가입</Heading>
      <SignUpForm />
    </div>
  );
};

export default SingUpPage;
