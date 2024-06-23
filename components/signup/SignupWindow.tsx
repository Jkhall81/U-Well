import { SignupForm } from "./SignupForm";

export const SignupWindow = () => {
  return (
    <div className="mt-[-100px] flex h-[70vh] w-full flex-col items-center rounded-2xl bg-neutral-200 shadow-2xl xl:w-[60%] 4xl:h-[60vh] 4xl:w-[40%]">
      <h1 className="pt-10 text-4xl font-semibold">Sign up</h1>
      <SignupForm />
    </div>
  );
};
