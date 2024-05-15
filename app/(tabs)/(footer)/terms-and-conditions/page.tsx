import { TitleAndText } from "@/components/PrivacyPolicy/TitleAndText";
import { termsOfUseData } from "@/lib/TermsOfUseData";
import { Footer } from "@/components/Footer";

const TermsAndConditionsPage = () => {
  return (
    <main className="main-container">
      <div className="content-container">
        <div className="mx-10 flex flex-col items-center space-y-10 pt-20">
          <h1 className="heading-one text-center text-7xl font-semibold lg:text-8xl">
            Terms and Conditions
          </h1>
          <p className="prose text-2xl text-white">Last updated: 05/10/2024</p>
          <p className="prose text-3xl text-white">
            Welcome to our mental health web and mobile application (the
            &#34;Application&#34;). The Application is owned and operated by
            Mental Health Solutions Inc. (&#34;we&#34;, &#34;us&#34;, or
            &#34;our&#34;). The Application provides a platform that connects
            users (&#34;you&#34; or &#34;your&#34;) with licensed mental health
            professionals (&#34;Providers&#34;) who can offer online counseling,
            therapy, and coaching services. The Application also allows you to
            track your daily mood, journal your thoughts and feelings, and
            access other mental health resources.
          </p>
          <p className="prose text-3xl text-white">
            By accessing or using the Application, you agree to be bound by
            these Terms of Use (&#34;Terms&#34;). These Terms govern your use of
            the Application and the services provided by the Providers
            (&#34;Services&#34;). If you do not agree to these Terms, you may
            not use the Application or the Services.
          </p>
        </div>
        <div className="">
          {termsOfUseData.map((data, index) => {
            return (
              <TitleAndText key={index} title={data.title} text={data.text} />
            );
          })}
        </div>
        <div className="mx-10 mt-20 flex flex-col items-center space-y-10 text-white">
          <h2 className="text-4xl font-semibold xl:text-6xl">Contact Us</h2>
          <p className="prose mx-auto pb-[400px] text-3xl text-white">
            If you have any questions, comments, or concerns about these Terms
            or the Application or the Services, please contact us at: <br />
            <br />
            <a
              className="text-xl text-white xl:text-3xl"
              href="mailto:support@mentalhealthsolutions.com"
            >
              support@mentalhealthsolutions.com
            </a>
            .
          </p>
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default TermsAndConditionsPage;
