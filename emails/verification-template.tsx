import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

function getBaseUrl() {
  return `http://localhost:3000`;
}

// Obtain the base URL using the imported function
const baseUrl = getBaseUrl();

// Define the properties expected by the VerificationTemplate component
interface VerificationTemplateProps {
  email: string;
  emailVerificationToken: string;
}

// Define the VerificationTemplate component that takes the defined properties
export const VerificationTemplate = ({
  email,
  emailVerificationToken,
}: VerificationTemplateProps) => (
  <Tailwind>
    <Html>
      <Head />
      <Preview>Welcome to U-Well!</Preview>
      <Body className="border-2 border-red-500">
        <Container className="flex flex-col items-center px-4 3xl:px-0">
          <div className="mx-auto mb-16 flex justify-center">
            <Img
              src="https://u-wellhealth.com/_next/image?url=%2Flogo.png&w=96&q=100"
              alt="U-Well"
            />
          </div>
          <Text className="pb-4 text-center text-4xl font-bold">
            Welcome to U-Well Health!
          </Text>
          <Text className="text-xl">
            Welcome to U-Well Health! Join millions of others in the opportunity
            to better your mental health and well-being.
          </Text>
          <Text className="pb-4 text-xl">
            Take the first step! Verify your email:
          </Text>
          <Section className="">
            {/* Button that takes the user to the verification link */}
            <Button
              href={`${baseUrl}/auth/verify-email?token=${emailVerificationToken}`}
              className="mb-4 h-[40px] w-full rounded-3xl bg-blue-600 py-2 text-center text-3xl text-white"
            >
              Click here to verify
            </Button>
          </Section>
          <Hr />
          <div className="flex justify-evenly">
            <Button
              className="mr-10"
              href="https://u-wellhealth.com/terms-and-conditions"
            >
              Terms & Conditions
            </Button>
            <Button
              className="ml-10"
              href="https://u-wellhealth.com/privacy-policy"
            >
              Privacy Policy
            </Button>
          </div>
        </Container>
      </Body>
    </Html>
  </Tailwind>
);

export default VerificationTemplate;
