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
        <h2 className="text-6xl font-semibold text-white">{title}</h2>
        <p className="prose mx-auto pt-10 text-3xl text-white">{text}</p>
        <ul className="mx-[700px] space-y-4 pt-20 text-3xl">
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
