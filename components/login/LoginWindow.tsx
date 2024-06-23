import { LoginForm } from "./LoginForm";

export const LoginWindow = () => {
  return (
    <div className="mt-[-100px] flex h-[60vh] w-[60%] flex-col items-center rounded-2xl bg-neutral-200 shadow-2xl 4xl:h-[60vh] 4xl:w-[40%]">
      <h1 className="pt-10 text-4xl font-semibold">Log in</h1>
      <LoginForm />
    </div>
  );
};
