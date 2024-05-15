import { FaCircle } from "react-icons/fa";

interface Props {
  title: string;
  text: string;
  bullets: string[];
}

export const BulletPoints = ({ title, text, bullets }: Props) => {
  return (
    <main className="flex flex-col">
      <div className="mx-auto flex flex-col items-center pt-20 text-white">
        <h2 className="mx-10 text-center text-4xl font-semibold text-white xl:text-6xl">
          {title}
        </h2>
        <p className="prose mx-10 pt-10 text-3xl text-white xl:mx-auto">
          {text}
        </p>
        <ul className="2xl:[300px] mx-10 space-y-4 pt-20 text-3xl 3xl:mx-[700px]">
          {bullets.map((bullet, index) => {
            return (
              <li key={index} className="flex justify-start">
                <span>
                  <FaCircle size={18} className="mr-4 mt-[9px]" />
                </span>
                {bullet}
              </li>
            );
          })}
        </ul>
      </div>
    </main>
  );
};
