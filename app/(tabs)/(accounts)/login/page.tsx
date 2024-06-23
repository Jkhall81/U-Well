import { Footer } from "@/components/Footer";
import { LoginWindow } from "@/components/login/LoginWindow";

const LoginPage = () => {
  return (
    <div className="flex h-full w-full">
      <div className="z-30 m-[150px] flex h-full min-h-screen w-[90%] items-center justify-center rounded-[40px] 4xl:w-[70%]">
        <LoginWindow />
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
export default LoginPage;
