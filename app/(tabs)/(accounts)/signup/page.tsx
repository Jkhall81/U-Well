import { SignupWindow } from "@/components/signup/SignupWindow";
import { Footer } from "@/components/Footer";

const SignupPage = () => {
  return (
    <div className="flex h-full w-full">
      <div className="z-30 mx-10 my-[150px] flex h-full min-h-screen w-full items-center justify-center rounded-[40px] xl:w-[90%] 4xl:m-[150px] 4xl:w-[70%]">
        <SignupWindow />
      </div>
      <div className="w-0 4xl:w-[30%]"></div>
      <div
        className={`absolute left-0 z-30 mt-[1320px] flex w-full items-center justify-between pb-2`}
      >
        <Footer />
      </div>
    </div>
  );
};
export default SignupPage;
