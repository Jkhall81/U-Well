interface Props {
  title: string;
  text: string[];
}

export const TitleAndText = ({ title, text }: Props) => {
  return (
    <main>
      <div className="mx-auto pt-20 text-white">
        <h2 className="text-center text-6xl font-semibold">{title}</h2>
        {text.map((paragraph, index) => {
          return (
            <p key={index} className="prose mx-auto pt-10 text-3xl text-white">
              {paragraph}
            </p>
          );
        })}
      </div>
    </main>
  );
};
