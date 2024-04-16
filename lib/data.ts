import slugify from "react-slugify";

let links = [
  {
    title: "Home",
  },
  {
    title: "About Us",
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
  {
    title: "Testimonials",
  },
];

export const navLinks = links.map((link) => ({
  ...link,
  href: `/${slugify(link.title)}`,
}));

export const PatientRegistrationSteps = [
  {
    id: 1,
    question: "What is your gender identify?",
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
