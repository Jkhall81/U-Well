"use server";

export const envTest = () => {
  let result = [
    console.log("AUTH_SECRET", process.env.AUTH_SECRET),
    console.log("DATABASE_URL", process.env.DATABASE_URL),
    console.log("RESENT_API_KEY", process.env.RESEND_API_KEY),
    console.log("AUTH_TRUST_HOST", process.env.AUTH_TRUST_HOST),
  ];
  return result;
};
