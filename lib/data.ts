import slugify from "react-slugify";

let links = [
  {
    title: "Home",
  },
  {
    title: "About Us",
  },
  {
    title: "FAQ",
  },
  {
    title: "Provider Registration",
  },
  {
    title: "Patient Registration",
  },
  {
    title: "Contact Us",
  },
];

export const navLinks = links.map((link) => ({
  ...link,
  href: `/${slugify(link.title)}`,
}));

export const ProviderRegistrationSteps = [
  {
    id: 1,
    question: "What is your gender identity?",
    answers: [
      "Woman",
      "Man",
      "Non Binary",
      "Transfeminine",
      "Transmasculine",
      "Agender",
      "I don't know",
      "Prefer not to say",
      "Other",
    ],
  },
  {
    id: 2,
    question: "How old are you?",
    answers: [""],
  },
  {
    id: 3,
    question: "How do you identify",
    answers: ["Straight", "Gay", "Lesbian", "Bi or Pan", "Prefer not to say"],
  },
  {
    id: 4,
    question: "What area(s) do you specialize in?",
    answers: [
      "Behavioral",
      "Drug/Substance abuse",
      "Marriage/Couples",
      "Family",
      "Talk therapy",
      "Life coach",
      "Other",
    ],
  },
  {
    id: 5,
    question: "Do you consider yourself to be relifious?",
    answers: ["Yes", "No"],
  },
  {
    id: 6,
    question: "Which religion do you identify with?",
    answers: ["Christianity", "Judaism", "Islam", "Other"],
  },
  {
    id: 7,
    question:
      "Would you be okay working with a patient that has different religious beliefs than you?",
    answers: ["Yes", "No"],
  },
  {
    id: 8,
    question: "Do you consider yourself to be spiritual?",
    answers: ["Yes", "No"],
  },
  {
    id: 9,
    question: "What age group do you typically work with?",
    answers: ["Adults", "Children"],
  },
  {
    id: 10,
    question: "What areas do you primarily focus on?",
    answers: [
      "Depression",
      "Stress",
      "Grieving",
      "Trauma",
      "Talk therapy",
      "Other",
    ],
  },
  {
    id: 11,
    question: "Do you participate with insurance",
    answers: ["Yes", "No"],
  },
  {
    id: 12,
    question:
      "Please tells us about yourself and your experience in your own words.",
    answers: [""],
  },
  {
    id: 13,
    question:
      "What is your experience with providing counseling services to individuals from diverse backgrounds?",
    answers: [
      "Limited experience",
      "Moderate experience",
      "Extensive experience",
    ],
  },
  {
    id: 14,
    question:
      "Think back to a time when you had to manage a difficult situation in a counseling session.  How did you handle it?",
    answers: [
      "Actively listened and empathized",
      "Sought supervision or consultation",
      "Ended the session abruptly",
    ],
  },
  {
    id: 15,
    question:
      "How do you handle ethical dilemmas that arise during the course of counseling sessions?",
    answers: [
      "Followed professional codes of ethics",
      "Ignored ethical concerns",
      "Made decisions based on personal beliefs",
    ],
  },
  {
    id: 16,
    question:
      "Explain your understanding of the different types of psychotherapies and when they are most effective.",
    answers: [
      "Demonstrated knowledge of various approaches",
      "Focused only on one type of therapy.",
      "Had no awareness of psychotherapies",
    ],
  },
  {
    id: 17,
    question:
      "What strategies do you use to build trust and rapport with clients?",
    answers: [
      "Shared personal experiences",
      "Active listening and empathy",
      "Avoided building relationships",
    ],
  },
  {
    id: 18,
    question: "How do you assess for suicidal ideation in a client?",
    answers: [
      "Asked directly about suicidal thoughts",
      "Ignored signs of distress",
      "Assumed clients would disclose voluntarily",
    ],
  },
  {
    id: 19,
    question:
      "Have you ever dealth with a client who was resistant to treatment?  If so, what was your approach?",
    answers: [
      "Explored reasons for resistance",
      "Terminated therapy immediately",
      "Ignored client's resistance",
    ],
  },
  {
    id: 20,
    question:
      "Describe a patient case you have worked on that required a multidisciplinary approach.",
    answers: [
      "Collaborated with other professionals",
      "Worked in isolation",
      "Never encountered such cases",
    ],
  },
  {
    id: 21,
    question:
      "What techniques do you use to help clients identify their goals and objectives for therapy?",
    answers: [
      "conducted goal-setting discussions",
      "Avoided discussing goals",
      "Imposed goals on clients",
    ],
  },
  {
    id: 22,
    question:
      "How do you ensure that all clients feel comfortable discussing sensitive topics in a safe environment?",
    answers: [
      "Created a nonjudgmental space",
      "Dismissed client's concerns",
      "Avoided discussing sensitive issues",
    ],
  },
];

export const PatientRegistrationSteps = [
  {
    id: 1,
    question: "What is your gender identity?",
    answers: [
      "Woman",
      "Man",
      "Non Binary",
      "Transfeminine",
      "Transmasculine",
      "Agender",
      "I don't know",
      "Prefer not to say",
      "Other",
    ],
  },
  {
    id: 2,
    question: "How old are you?",
    answers: [""],
  },
  {
    id: 3,
    question: "How do you identify?",
    answers: ["Straight", "Gay", "Lesbian", "Bi or Pan", "Prefer not to say"],
  },
  {
    id: 4,
    question: "What is your relationship status?",
    answers: [
      "single",
      "In a relationship",
      "Married",
      "Divorced",
      "Widowed",
      "Other",
    ],
  },
  {
    id: 5,
    question: "Do you consider yourself to be religious?",
    answers: ["Yes", "No"],
  },
  {
    id: 6,
    question: "Which religion do you identify with?",
    answers: ["christianity", "Judaism", "Islam", "Other"],
  },
  {
    id: 7,
    question:
      "Would you like to be matched with a therapist who provides Christian-based therapy?",
    answers: ["Yes", "No"],
  },
  {
    id: 8,
    question: "Do you consider yourself to be spiritual?",
    answers: ["Yes", "No"],
  },
  {
    id: 9,
    question: "Have you ever been in therapy before?",
    answers: ["Yes", "No"],
  },
  {
    id: 10,
    question: "What led you to consider therapy today?",
    answers: [
      "I've been feeling depressed",
      "I feel anxious or overwhelmed",
      "My mood is interfering with my job / school performance",
      "I struggle with building or maintaining relationships",
      "I can't find purpose and meaning in my life",
      "I am grieving",
      "I have experienced trauma",
      "I need to talk through a specific challenge",
      "I want to gain self confidence",
      "I want to improve myself but I don't know where to start",
      "Recommended to me (friend, family, doctor).",
      "Just exploring",
      "Other",
    ],
  },
  {
    id: 11,
    question:
      "What are your expectations from your therapist?  A therapist who...",
    answers: [
      "Listens",
      "Explores my past",
      "Teaches me new skills",
      "Challenges my beliefs",
      "Assigns me homework",
      "Guides me to set goals",
      "Proactively checks in with me",
      "Other",
      "I don't know",
    ],
  },
  {
    id: 12,
    question: "Would you prefer a therapist who is gentle or direct?",
    answers: [
      "Gentle",
      "Somewhat gentle",
      "No preference",
      "Somewhat direct",
      "Direct",
    ],
  },
  {
    id: 13,
    question: "Would you prefer a therapist who is flexible or structured?",
    answers: [
      "Flexible",
      "Somewhat flexible",
      "No preference",
      "Somewhat structured",
      "Structured",
    ],
  },
  {
    id: 14,
    question: "Would you prefer a therapist who is casual or formal?",
    answers: [
      "Casual",
      "Somewhat casual",
      "No preference",
      "Somewhat formal",
      "Formal",
    ],
  },
  {
    id: 15,
    question: "How would you rate your current physical health?",
    answers: ["Good", "Fair", "Poor"],
  },
  {
    id: 16,
    question: "How would you rate your current eating haibts?",
    answers: ["Good", "Fair", "Poor"],
  },
  {
    id: 17,
    question:
      "Are you currently experiencing overwhelming sadness, grief, or depression?",
    answers: ["Yes", "No"],
  },
  {
    id: 18,
    question:
      "Over the past 2 weeks, how often have you been bothered by any of the following problems: Little interest or pleasure in doing things.",
    answers: [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day",
    ],
  },
  {
    id: 19,
    question:
      "Over the past 2 weeks, how often have you been bothered by any of the following problems: Moving or speaking so slowly that other people could have noticed? Or the opposite - being so fidgety or restless that you have been moving around a lot more than usual.",
    answers: [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day",
    ],
  },
  {
    id: 20,
    question:
      "Over the past 2 weeks, how often have you been bothered by any of the following problems: Feeling down, depressed or hopeless.",
    answers: [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day",
    ],
  },
  {
    id: 21,
    question:
      "Over the past 2 weeks, how often have you been bothered by any of the following problems: Trouble falling asleep, staying asleep, or sleeping too much.",
    answers: [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day",
    ],
  },
  {
    id: 22,
    question:
      "Over the past 2 weeks, how often have you been bothered by any of the following problems: Feeling tired or having little energy.",
    answers: [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day",
    ],
  },
  {
    id: 23,
    question:
      "Over the past 2 weeks, how often have you been bothered by any of the following problems: Poor appetite or overeating.",
    answers: [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day",
    ],
  },
  {
    id: 24,
    question:
      "Over the past 2 weeks, how often have you been bothered by any of the following problems: Feeling bad about yourself - or that you are a failure or have let yourself or your family down.",
    answers: [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day",
    ],
  },
  {
    id: 25,
    question:
      "Over the past 2 weeks, how often have you been bothered by any of the following problems: Trouble concentrating on things, such as reading the newspaper or watching television.",
    answers: [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day",
    ],
  },
  {
    id: 26,
    question:
      "Over the past 2 weeks, how often have you been bothered by any of the following problems: How difficult have these problems made it for you to do your work, take care of things at home, or get along with other people?",
    answers: [
      "Not at all",
      "Several days",
      "More than half the days",
      "Nearly every day",
    ],
  },
  {
    id: 27,
    question: "Are you currently employed?",
    answers: ["Yes", "No"],
  },
  {
    id: 28,
    question: "Do you have any problems or worries about intimacy?",
    answers: ["Yes", "No"],
  },
  {
    id: 29,
    question: "How often do you drink alcohol?",
    answers: ["Never", "Infrequently", "Monthly", "Weekly", "Daily"],
  },
  {
    id: 30,
    question: "When was the last time you thought about suicide?",
    answers: [
      "Never",
      "Over a year ago",
      "Over 3 months ago",
      "Over a month ago",
      "Over 2 weeks ago",
      "In the last 2 weeks",
    ],
  },
  {
    id: 31,
    question:
      "Are you currently experiencing anxiety, panic attacks or have any phobias?",
    answers: ["Yes", "No"],
  },
];

export const FAQData = [
  {
    question:
      "What are the qualifications and credentials of the mental health professionals who provide online visits?",
    answer: [
      "Our providers come from all backgrounds and walks of life, and the licensure is no different. We work with everyone from peer counselors to psychologists and all other mental health professionals. You can view the profiles of our providers on our website or mobile application and choose the one that best suits your needs and preferences. All our providers are licensed and qualified to provide online mental health services in accordance with the laws and regulations of their jurisdiction.",
    ],
  },
  {
    question: "How do I schedule an online visit and how long does it last?",
    answer: [
      `You can schedule an online visit by using our website or mobile application and selecting the provider and time slot that suits you. You can choose from 30, 45, or 60 minute sessions depending on your needs and availability. You will receive a confirmation email and a reminder before your scheduled visit.`,

      `The fees and payment options for the online visits and the mobile application service vary depending on your insurance coverage and the type and length of the session. You can pay with cash, credit card, debit card, or PayPal. You will be able to see the cost of the visit before you book it and you will only be charged after the visit is completed. We do not have any hidden costs or fees. If you have any questions about the fees and payment options, you can contact our customer support team at any time.
    `,
    ],
  },
  {
    question:
      "What are the fees and payment options for the online visits and the mobile application service?",
    answer: [
      `You can download the mobile application for free from the Google Play or Apple Store and use it to schedule and access your online visits with our mental health professionals.`,

      `You can also use our website to schedule and access your online visits if you prefer a browser-based option.`,

      `The fees for the online visits depend on your insurance coverage and the type and length of the session. You can choose from 30, 45, or 60 minute sessions depending on your needs and availability. You will be able to see the cost of the visit before you book it and you will only be charged after the visit is completed. We do not have any hidden costs or fees.`,

      `You can pay for the online visits with credit card, debit card, or PayPal. You can also use in-app purchases to pay for the online visits if you use the mobile application. You can manage your subscriptions and payments from the website or the mobile application at any time.`,

      `If you have any questions about the fees and payment options, you can contact our customer support team at any time.`,
    ],
  },
  {
    question:
      "What are the privacy and security policies and practices of the mobile application service and how is my personal and health information protected?",
    answer: [
      `We take your privacy and security very seriously and we follow the highest standards of data protection. Our mobile application service is HIPAA compliant, which means that we adhere to the federal law that protects your personal and health information from unauthorized access or disclosure. All of our data is encrypted using advanced encryption algorithms and stored in secure servers.`,

      `We also ensure that our partner platforms for practice management and electronic health records are HIPAA compliant and have the same level of data protection as we do. We do not sell or give away any of your data to third parties and we do not use your data for any purpose outside of U-Well Health. You can review our terms of service and privacy notice for detailed information on how we collect, use, and safeguard your data.`,

      `You can also control your own privacy settings and choose what information you want to share with the mental health professional during the online visit. You can access and update your privacy settings from the website or the mobile application at any time.`,
    ],
  },
  {
    question:
      "How do I communicate with the mental health professional during the online visit and what are the options for audio and video?",
    answer: [
      `To communicate with the mental health professional during the online visit, you can use our secure and encrypted platform that is integrated with Zoom. You can access the platform from the website or the mobile application and join the online visit with a simple click. You do not need to download or install any additional software or create a separate Zoom account.`,

      `You can choose between audio and video options for the online visit, depending on your preference and internet connection. However, we recommend using video as much as possible, as it allows the mental health professional to see your facial expressions, body language, and other non-verbal cues that are important for effective communication and diagnosis. Video also helps create a more personal and engaging experience that is closer to an in-person visit.`,
    ],
  },
  {
    question:
      "What are the benefits and limitations of online visits compared to in-person visits?",
    answer: [
      `Online visits have many benefits compared to in-person visits, such as convenience, accessibility, affordability, and privacy. You can receive mental health care from the comfort of your own home or wherever you feel most comfortable, without having to travel, take time off work, or deal with waiting rooms. You can also access a wider range of mental health professionals across the country, who may have different expertise, experience, and availability than those in your local area. Online visits can also be more affordable than in-person visits, as they may have lower fees or be covered by your insurance. Additionally, online visits can offer more privacy and anonymity than in-person visits, as you do not have to disclose your identity or location to anyone except the mental health professional you are seeing.`,

      `However, online visits also have some limitations compared to in-person visits, such as technical issues, quality of connection, security risks, and lack of physical presence. Technical issues such as internet outage, device malfunction, or software glitches can disrupt or cancel your online visit, which can be frustrating and stressful. Quality of connection can also affect your online visit, as poor audio or video quality can make it hard to hear or see the mental health professional clearly, or cause delays or interruptions in the conversation. Security risks can also arise if your online visit is hacked, recorded, or leaked by malicious third parties, which can compromise your confidentiality and privacy. Finally, online visits lack the physical presence and human touch that in-person visits offer, which can make it harder to establish rapport, trust, and empathy with the mental health professional, or to convey subtle emotions and signals that are essential for effective communication and diagnosis.`,
    ],
  },
  {
    question:
      "How do I provide feedback and ratings for the online visits and the mobile application service?",
    answer: [
      `To provide feedback and ratings for the online visits and the mobile application service, you can use the in-app rating system that is available after your appointment. You will have the opportunity to rate your provider on a scale of 1 to 5 stars and leave feedback about your experience. This is completely anonymous and will not affect your relationship with your provider or the quality of care you receive. Your feedback and ratings will help us improve our service and match you with the best provider for your needs. Thank you for using our mobile application service for your mental health care.`,
    ],
  },
  {
    question:
      "What are the emergency procedures and protocols in case of a crisis or a technical issue during the online visit?",
    answer: [
      `If you are experiencing a crisis or a technical issue during the online visit, you can use the integrated crisis support feature that is available on the mobile application. By clicking on the crisis support button, you will be immediately connected to a live person who can assist you with your situation. The crisis support person will assess your level of risk and provide you with appropriate resources and referrals. They will also notify your provider and help you reschedule your appointment if needed. Our goal is to ensure you get the help you need when you need it. Please do not hesitate to use the crisis support feature if you feel unsafe or distressed during the online visit.`,
    ],
  },
  {
    question:
      "How do I access additional resources and support from the mobile application service such as self-help tools, peer support, or referrals?",
    answer: [
      `To access additional resources and support from the mobile application service, you can use the menu icon on the top left corner of the screen. Once you tap on the menu icon, you will see a list of options that include self-help tools, peer support, referrals, and more. Our self-help tools include motivational speakers, life coaches, calming music, journaling, and other activities that can help you cope with stress, anxiety, depression, or any other mental health challenges. Our peer support option allows you to join online communities and chat groups where you can share your experiences and learn from others who are going through similar situations. Our referrals option provides you with a directory of local and online resources that can offer you additional support and guidance, such as counseling centers, crisis hotlines, wellness centers, and more. We are constantly adding new features and services to our mobile application to help you along your wellness journey. You can also provide us with feedback and suggestions on how we can improve our service by using the contact us option on the menu. We hope you enjoy using our mobile application service and find it beneficial for your mental health and well-being. How do I manage my account and preferences on the mobile application service and how can I change or cancel my subscription? How do I contact the customer service or technical support of the mobile application service if I have any questions or concerns? How do I verify the identity and authenticity of the mental health professional and the mobile application service?`,
    ],
  },
  {
    question:
      "How do I contact the customer service or technical support of the mobile application service if I have any questions or concerns?",
    answer: [
      "If you have any questions or concerns about the mobile application service, you can contact us by using the contact us form on our website. You can also leave feedback in the application by tapping on the feedback option on the menu. We appreciate your comments and suggestions and we will try to respond to your inquiries as soon as possible. We value your satisfaction and trust and we are committed to providing you with the best service possible.",
    ],
  },
  {
    question:
      "How do I verify the identity and authenticity of the mental health professional and the mobile application service?",
    answer: [
      "To verify the identity and authenticity of the mental health professional and the mobile application service, you can check the credentials and licenses of our providers on our website. Our providers are all licensed and credentialed with their respective state and federal agencies. Licensing for any of our providers can be supplied upon request. You can also verify the security and privacy of the mobile application service by reading our terms of service and privacy policy. We use encryption and other measures to protect your personal information and data. We comply with all applicable laws and regulations regarding mental health services and online platforms.",
    ],
  },
];

export const aboutUsDataOne = {
  title: "How does U-Well Health Work?",
  text: "U-Well Health simplifies the process of finding and receiving mental health care.  Here's how it works: ",
  listItems: [
    "Sign up and complete a brief questionnaire about your mental health goals, preferences, and insurance.",
    "Get matched with a licensed and verified provider who specializes in your area of concern and meets your criteria.",
    "Schedule a free consultation with your provider to see if you are a good fit.",
    "Start your sessions via secure video chat, phone call or messaging.",
    "Track your progress and get feedback from your provider.",
    "Pay for your sessions with your insurance, credit card, or flexible spending account.",
  ],
};

export const aboutUsDataTwo = {
  title: "What are the benefits of U-Well Health?",
  text: "U-Well Health offers many benefits for both patients and providers, such as: ",
  listItems: [
    "Convenience: You can access mental health care anytime, anywhere, without the hassle of commuting, parking, or waiting rooms.",
    "Affordability: You can save money by using your insurance, paying lower fees, or choosing a sliding scale option.",
    "Accessibility: You can find a provider who matches your needs, preferences, and availability, regardless of your location, schedule, or budget.",
    "Privacy: You can enjoy the confidentiality and security of our app, which complies with all privacy laws and regulations.",
    "Integration: You can sync your U-Well Health account with your provider's practice management and electronic health record systems, making it easier to manage your appointments, billing, and medical records.",
    "Quality: You can receive high-quality mental health care from licensed and verified providers who have been vetted and trained by our team.",
  ],
};
