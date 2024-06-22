import Image from "next/image";

export const EndOfForm = () => {
  return (
    <div className="flex h-full w-full flex-col items-center text-white">
      <h1 className="mx-10 mb-8 text-4xl font-semibold">
        Thank you for completing the registration process!
      </h1>
      <p className="text-2xl font-semibold">
        We will be getting in contact with you shortly!
      </p>
      <Image
        src="/Hero.png"
        alt="image of mind being repaired"
        height={1550}
        width={1550}
      />
    </div>
  );
};
