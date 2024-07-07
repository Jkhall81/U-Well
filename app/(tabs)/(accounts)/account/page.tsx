import { Footer } from "@/components/Footer";
import LogoutButton from "@/components/account/LogoutButton";
import { auth } from "@/app/auth";

const AccountPage = async () => {
  const session = await auth();
  console.log("AUTH_SECRET", process.env.AUTH_SECRET);
  console.log("DATABASE_URL", process.env.DATABASE_URL);
  console.log("RESENT_API_KEY", process.env.RESEND_API_KEY);
  console.log("AUTH_TRUST_HOST", process.env.AUTH_TRUST_HOST);
  return (
    <div className="flex h-full w-full">
      <div className="z-30 m-[150px] flex h-full min-h-screen w-[90%] items-center justify-center rounded-[40px] 4xl:w-[70%]">
        <LogoutButton />
      </div>
      <div className="w-0 4xl:w-[30%]">
        <h1 className="mt-[500px] text-5xl text-red-500">
          {JSON.stringify(session, null, 2)}
        </h1>
      </div>
      <div
        className={`absolute left-0 z-30 mt-[1320px] flex w-full items-center justify-between pb-2`}
      >
        <Footer />
      </div>
    </div>
  );
};
export default AccountPage;
