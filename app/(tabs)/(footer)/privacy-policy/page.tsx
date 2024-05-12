import { Footer } from "@/components/Footer";
import { TitleAndTextData, BulletPointsData } from "@/lib/PrivacyPolicyData";
import { TitleAndText } from "@/components/PrivacyPolicy/TitleAndText";
import { BulletPoints } from "@/components/PrivacyPolicy/BulletPoints";
import { FaCircle } from "react-icons/fa";

const listItemsOne = [
  "Name",
  "Email address",
  "Phone number",
  "Address",
  "Health insurance information",
  "Medical history and records",
  "Payment information",
  "Other information you choose to provide",
];

const listItemsTwo = [
  "IP address",
  "Device type and identifier",
  "Browser type and version",
  "Operating system",
  "Referring and exit pages",
  "Date and time of access",
  "Usage and activity data",
  "Cookies and other tracking technologies",
];

const PrivacyPolicyPage = () => {
  return (
    <main className="main-container">
      <div className="content-container">
        <div>
          <h1 className="heading-one pt-20 text-center text-7xl font-semibold lg:text-8xl">
            Privacy Policy
          </h1>
        </div>
        <div className="flex h-full w-full flex-col">
          <div>
            <TitleAndText
              title={TitleAndTextData[0].title}
              text={TitleAndTextData[0].text}
            />
          </div>
          <div className="flex h-full w-full flex-col text-white">
            <h2 className="pt-20 text-center text-6xl font-semibold">
              What Information Do We Collect?
            </h2>
            <p className="prose mx-auto pt-20 text-3xl text-white">
              We collect information that you voluntarily provide to us when you
              register or create an account, request information, contact us, or
              otherwise interact with our website or services. The types of
              information we may collect include your:
            </p>
            <ul className="mx-auto space-y-4 pt-20 text-3xl">
              {listItemsOne.map((item, index) => {
                return (
                  <li key={index} className="flex justify-start">
                    <span>
                      <FaCircle size={18} className="mr-4 mt-[9px]" />
                    </span>
                    {item}
                  </li>
                );
              })}
            </ul>
            <p className="prose mx-auto pt-20 text-3xl text-white">
              We also collect inormation that is automatically generated when
              you access or use our website or services, such as your:
            </p>
            <ul className="mx-auto space-y-4 pt-20 text-3xl">
              {listItemsTwo.map((item, index) => {
                return (
                  <li key={index} className="flex justify-start">
                    <span>
                      <FaCircle size={18} className="mr-4 mt-[9px]" />
                    </span>
                    {item}
                  </li>
                );
              })}
            </ul>
            <BulletPoints
              title={BulletPointsData[0].title}
              text={BulletPointsData[0].text}
              bullets={BulletPointsData[0].bullets}
            />
            <BulletPoints
              title={BulletPointsData[1].title}
              text={BulletPointsData[1].text}
              bullets={BulletPointsData[1].bullets}
            />
            <TitleAndText
              title={TitleAndTextData[1].title}
              text={TitleAndTextData[1].text}
            />
          </div>
        </div>
      </div>
      <div className="absolute z-30 mt-[5700px] flex w-full items-center justify-between">
        <Footer />
      </div>
    </main>
  );
};

export default PrivacyPolicyPage;
