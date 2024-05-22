import { Button } from "./ui/button";

interface Props {
  setIsIntro: (boolean: boolean) => void;
}

export const ProviderQuestionIntro = ({ setIsIntro }: Props) => {
  const handleClick = () => {
    setIsIntro(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <main className="flex w-full flex-col items-center justify-center text-white">
      <div>
        <h1 className="heading-one mx-10 mb-20 mt-10 py-2 text-5xl font-semibold md:text-6xl lg:text-7xl">
          Your Journey to Connecting with Patients Begins Here
        </h1>
      </div>
      <div className="prose mx-10 flex flex-col items-center pb-[300px] text-3xl text-white">
        <p>
          Before we ask you the questions, we would like to explain why we are
          doing this and how it will benefit you. As a mental health matching
          service, we aim to connect you with patients who are looking for a
          provider like you. We understand that finding the right
          patient-provider fit is crucial for effective and satisfying therapy.
          That&apos;s why we don&apos;t rely on superficial criteria such as
          location, availability, or insurance. Instead, we go deeper and try to
          match you based on your beliefs, values, cultural background,
          therapeutic style, and areas of expertise.
        </p>
        <p>
          To do this, we need to know more about you as a provider and as a
          person. We have designed a detailed series of questions that will help
          us create a comprehensive profile of you. The questions cover topics
          such as:
        </p>
        <ul>
          <li>Your personal and professional background</li>
          <li>Your education and training</li>
          <li>Your theoretical orientation and preferred modalities</li>
          <li>Your specialties and populations you work with</li>
          <li>Your approach to different issues and challenges</li>
          <li>Your goals and expectations for therapy</li>
          <li>Your ethical standards and boundaries</li>
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
          of our patients. We will then present you with a list of patients who
          match your criteria and who are interested in working with you. You
          can review their profiles, watch their introduction videos, and read
          their reviews from other providers. You can also contact them directly
          through our secure messaging system and ask them any questions you may
          have. You are free to choose any patient from the list, or request a
          different match if you are not satisfied with the options.
        </p>
        <p>
          We hope that this process will make it easier and faster for you to
          find patients who can benefit from your expertise and experience. We
          are here to support you every step of the way and we value your
          feedback. If you have any questions or concerns, please feel free to
          contact us at any time.
        </p>
        <p>
          Thank you for choosing us as your partner in your mental health
          practice. Now, let&apos;s get started with the questions.
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
