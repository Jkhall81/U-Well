interface Props {
  title: string;
  text: string[];
}

export const TitleAndText = ({ title, text }: Props) => {
  return (
    <main>
      <div>
        <h2>{title}</h2>
        {text.map((paragraph, index) => {
          return <p key={index}>{paragraph}</p>;
        })}
      </div>
    </main>
  );
};
