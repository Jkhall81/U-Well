interface Props {
  title: string;
  text: string[];
}

export const TitleAndText = ({ title, text }: Props) => {
  return (
    <main>
      <div className="mx-10 pt-20 text-white xl:mx-auto">
        <h2 className="text-center text-4xl font-semibold xl:text-6xl">
          {title}
        </h2>
        {text.map((paragraph, index) => {
          return (
            <p
              key={index}
              className="prose pt-10 text-3xl text-white xl:mx-auto"
            >
              {paragraph}
            </p>
          );
        })}
      </div>
    </main>
  );
};
