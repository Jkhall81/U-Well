import { Button } from "./ui/button";

interface Props {
  setIsIntro: (boolean: boolean) => void;
}

export const PatientQuestionIntro = ({ setIsIntro }: Props) => {
  const handleClick = () => {
    setIsIntro(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <main className="absolute z-[40] mt-[200px] flex w-full flex-col items-center justify-center text-white">
      <div className="mx-10 flex flex-col items-center">
        <h1 className="heading-one mb-8 text-5xl font-semibold md:text-7xl lg:text-8xl">
          How to Find Your Best Match
        </h1>
        <p className="heading-two mb-20 text-3xl font-bold">
          A guide to the questions that will help us connect you with the right
          provider for you.
        </p>
      </div>
      <div className="prose mx-10 flex flex-col items-center pb-[300px] text-3xl text-white">
        <p>
          Welcome to our online platform, where we aim to provide you with
          personalized and high-quality mental health care. We know that finding
          a provider who understands your needs, preferences, and values can be
          challenging, especially in times of stress or crisis. That&apos;s why
          we have designed a series of questions that will help us match you
          with the best provider for you.
        </p>
        <p>
          These questions are not meant to diagnose you or label you in any way.
          They are simply a tool to help us get to know you better and find out
          what kind of support you are looking for. The questions will cover
          topics such as:
        </p>
        <ul>
          <li>Your current situation and challenges</li>
          <li>Your goals and expectations for therapy</li>
          <li>Your preferences for the type, frequency, and mode of therapy</li>
          <li>Your beliefs, values, and cultural background</li>
          <li>Your comfort level with different approaches and techniques</li>
        </ul>
        <p>
          There are no right or wrong answers to these questions. Just answer
          them honestly and as completely as you can. The more information you
          provide, the more accurate and tailored our matching process will be.
          You can also skip any question that you don&apos;t feel comfortable
          answering or that you think is not relevant to you.
        </p>
        <p>
          After you complete the questions, we will use a sophisticated
          algorithm to analyze your responses and compare them with the profiles
          of our providers. We will then present you with a list of providers
          who match your criteria and who have availability to work with you.
          You can review their profiles, watch their introduction videos, and
          read their reviews from other patients. You can also contact them
          directly through our secure messaging system and ask them any
          questions you may have. You are free to choose any provider from the
          list, or request a different match if you are not satisfied with the
          options.
        </p>
        <p>
          We hope that this process will make it easier and faster for you to
          find a provider who can help you achieve your mental health goals. We
          are here to support you every step of the way and we value your
          feedback. If you have any questions or concerns, please feel free to
          contact us at any time.
        </p>
        <p>
          Thank you for choosing us as your partner in your mental health
          journey. Now, let&apos;s get started with the questions.
        </p>
        <Button
          onClick={handleClick}
          className="mt-[100px] h-[50px] w-[400px] rounded-3xl bg-white text-2xl text-black hover:bg-blue-600 hover:text-white"
        >
          Continue
        </Button>
      </div>
    </main>
  );
};
