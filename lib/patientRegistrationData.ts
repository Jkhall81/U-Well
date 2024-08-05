export const PatientRegistrationSteps = [
  {
    id: 1,
    question: "What brings you to U-Well Health today?",
    componentType: "singleChoice",
    answers: [
      "Mental health needs.",
      "Improve my overall wellness.",
      "Improve my financial wellness.",
    ],
  },
  {
    id: 2,
    question: "How would you describe your current mental health?",
    componentType: "singleChoice",
    answers: ["Very Good", "Good", "Average", "Poor", "Very Poor", "Unsure"],
  },
  {
    id: 3,
    question:
      "Have you experienced any significant changes in your mood, energy levels, or behavior recently?",
    componentType: "singleChoice",
    answers: ["Yes", "No"],
  },
  {
    id: 4,
    question: "Are there any significant stressors in your life right now?",
    componentType: "singleChoice",
    answers: ["Yes", "No,"],
  },
  {
    id: 5,
    question:
      "Are you currently experiencing anxiety, panic attacks or do you have any phobias?",
    componentType: "singleChoice",
    answers: ["Yes", "No"],
  },
  {
    id: 6,
    question:
      "Are you currently experiencing overwhelming grief, sadness, or depression?",
    componentType: "singleChoice",
    answers: ["Yes", "No"],
  },
  {
    id: 7,
    question: "What led you to consider enrolling in therapy today?",
    componentType: "multipleChoice",
    answers: [
      "I'm feeling anxious or overwhelmed.",
      "My mood is interfering with school/work.",
      "I am struggling to build/maintain a health relationship.",
      "I'm grieving.",
      "I am struggling to find meaning/purpose in life.",
      "I am having difficulty dealing with trauma.",
      "I need to talk through a specific issue.",
      "I want to improve myself.",
      "I want to build self confidence.",
      "Recommended to seek therapy.",
      "I'm not sure.",
    ],
  },
  {
    id: 8,
    question: "Have you had therapy before?",
    componentType: "singleChoice",
    answers: ["Yes", "No"],
  },
  {
    id: 9,
    question: "Did you find your previous therapy helpful?",
    componentType: "singleChoice",
    answers: ["Yes", "No"],
  },
  {
    id: 10,
    question:
      "Please provide examples of why you feel you may have had poor previous experiences in therapy.",
    componentType: "multipleChoice",
    answers: [
      "Poor fit with Therapist - not feeling understood or connected.",
      "Expecting more immediate results - which may or may not have been realistic.",
      "Ineffective Therapy approach - feelings that my issues did not fit with the therapy method delivered, mismatched communication.",
      "Lack of progress - feelings of frustration.",
      "Therapist training or experience - or Ethical issues.",
      "Financial Stress - unaffordable sessions.",
      "Time Constraints - scheduling difficulties leading to inability to connect with a therapist.",
      "Different priorities of Therapist - different goals, unclear objectives.",
      "Scheduling locations or inconvenience - lack of continuity",
      "Other",
    ],
  },
  {
    id: 11,
    question: "What type of therapy have you had before?",
    componentType: "singleChoice",
    answers: [
      "Structured with homework and exercises.",
      "Open ended conversational style.",
      "Group like AA.",
    ],
  },
  {
    id: 12,
    question:
      "What are your main goals for therapy?  Setting clear and achievable goals in therapy can help provide purpose and direction making the therapuetic process more focused and effective moving you closer to a more positive outcome.",
    componentType: "multipleChoice",
    answers: [
      "Emotional Health: Learning techniques to help manage anxiety or stress.  Alleviate depression and improve emotional regulation.",
      "Personal Growth: Enhance Self-Esteem and increase self awareness of feelings and behaviors.  Develop resilence and strengthen bounce back from adversity.",
      "Specific Issues: Trauma - process and heal from past experiences.  Coping techniques.",
      "Behavioral Changes: Break unhealthy habits or change negative behaviors to develop well-being.  Develop healthier coping mechanisms, increase motivation and productivity by helping with personal and professional goals.",
      "Strengthening Relationships: Foster deeper and more meaningful connections with family, friends, and significant others.",
      "Address Substance Abuse: Develop a plan to reduce or eliminate substance abuse.",
      "Mental Health Disorders: Help manage conditions like Bipolar disorder, OCD, or PTSD.  Improve sleep, enhance focus and attention for issues like ADHD.",
      "Life Transitions: Navigate life changes, adjust to situations like divorce, loss of a loved one or career changes.  Career counseling, and adjustments to chronic illness.",
      "Improve Social Skills: Develop better social interactions.  Establish a strong support network, develop techniques to understand and share the feelings of others.",
    ],
  },
  {
    id: 13,
    question: "What type of counseling are you seeking?",
    componentType: "singleChoice",
    answers: ["Marriage/Couples", "Talk Therapy", "Peer Therapy (Such as AA)"],
  },
  {
    id: 14,
    question:
      "What are your expectations from a therapist? (I want a therapist who) check all that apply.",
    componentType: "multipleChoice",
    answers: [
      "Listens.",
      "Explores my past.",
      "Teaches new skills.",
      "Challenges my beliefs.",
      "Assigns me homework.",
      "Helps me set goals.",
      "Proactively checks in.",
      "I don't know.",
      "Communicates and helps me to understand.",
    ],
  },
  {
    id: 15,
    question: "Do you have any religious or cultural preferenes for therapy?",
    componentType: "singleChoice",
    answers: ["Yes", "No"],
  },
  {
    id: 16,
    question: "Would you like a faith based counselor?",
    componentType: "singleChoice",
    answers: ["Yes", "No", "Unsure"],
  },
  {
    id: 17,
    question: "What is your Religion?",
    componentType: "singleChoice",
    answers: ["Christian", "Judaism", "Islam", "Hinduism"],
  },
  {
    id: 18,
    question: "Do you have a preference for a gender for your therapist?",
    componentType: "singleChoice",
    answers: ["Yes", "No"],
  },
  {
    id: 19,
    question: "Select your preference.",
    componentType: "singleChoice",
    answers: ["Male", "Female"],
  },
  {
    id: 20,
    question: "What is your gender identity?",
    componentType: "singleChoice",
    answers: ["Woman", "Man", "Non-binary", "Prefer not to say", "Transgender"],
  },
  {
    id: 21,
    question: "What is your sexual orientation?",
    componentType: "singleChoice",
    answers: ["Straight", "Gay", "Lesbian", "Bi or Pan", "Prefer not to say"],
  },
  {
    id: 22,
    question:
      "Are you seeking a therapist who is knowledgeable and supportive of LGBTQ+ issues?",
    componentType: "singleChoice",
    answers: ["Yes", "No"],
  },
  {
    id: 23,
    question: "What is your relationship status?",
    componentType: "singleChoice",
    answers: [
      "Married",
      "Single",
      "Divorced",
      "Widowed",
      "Separated",
      "In a Relationship",
    ],
  },
  {
    id: 24,
    question: "Would you prefer a therapist who is gentle of direct?",
    componentType: "singleChoice",
    answers: [
      "Gentle",
      "Somewhat gentle",
      "No preference",
      "Somewhat direct",
      "Direct",
    ],
  },
  {
    id: 25,
    question: "Would you prefer a therapist who is flexible or structured?",
    componentType: "singleChoice",
    answers: [
      "Somewhat flexible",
      "No preference",
      "Somewhat structured",
      "Structured",
    ],
  },
  {
    id: 26,
    question: "Would you prefer a therapist who is casual or formal?",
    componentType: "singleChoice",
    answers: [
      "Casual",
      "Somewhat casual",
      "No preference",
      "Somewhat formal",
      "Formal",
    ],
  },
  {
    id: 27,
    question:
      "Over the past 2 weeks, how often have you been bothered by any of the following problems:  Little interest or pleasure in doing things.",
    componentType: "singleChoice",
    answers: ["Daily", "More than half the days", "Several days", "Never"],
  },
  {
    id: 28,
    question:
      "Over the past 2 weeks, how often have you been bothered by any of the following problems: Moving or speaking so slowly that other people could have noticed?  Or the opposite - being so fidgety or restless that you have been moving around alot more than usual.",
    componentType: "singleChoice",
    answers: ["Daily", "More than half the days", "Several days", "Never"],
  },
  {
    id: 29,
    question:
      "Over the past 2 weeks, how often have you been bothered by any of the following problems: Feeling down, depressed or hopeless.",
    componentType: "singleChoice",
    answers: ["Daily", "More than half the days", "Several days", "Never"],
  },
  {
    id: 30,
    question:
      "Over the past 2 weeks, how often have you been bothered by any of the following problems: Trouble falling asleep, staying asleep, or sleeping too much.",
    componentType: "singleChoice",
    answers: ["Daily", "More than half the days", "Several days", "Never"],
  },
  {
    id: 31,
    question:
      "Over the past 2 weeks, how often have you been bothered by any of the following problems: Feeling tired or having little energy.",
    componentType: "singleChoice",
    answers: ["Daily", "More than half the days", "Several days", "Never"],
  },
  {
    id: 32,
    question:
      "Over the past 2 weeks, how often have you been bothered by any of the following problems: Poor appetite or overeating.",
    componentType: "singleChoice",
    answers: ["Daily", "More than half the days", "Several days", "Never"],
  },
  {
    id: 33,
    question:
      "Over the past 2 weeks, how often have you been bothered by any of the following problems: Trouble concentrating on things, such as reading the news or watching television.",
    componentType: "singleChoice",
    answers: ["Daily", "More than half the days", "Several days", "Never"],
  },
  {
    id: 34,
    question:
      "Over the past 2 weeks, how often have you been bothered by any of the following problems: Trouble concentrating on things, such as reading the news or watching television.",
    componentType: "singleChoice",
    answers: ["Daily", "More than half the days", "Several days", "Never"],
  },
  {
    id: 35,
    question: "Are you currently employed?",
    componentType: "singleChoice",
    answers: [
      "Yes",
      "No",
      "In School",
      "Retired",
      "Disabled",
      "Prefer not to say",
    ],
  },
  {
    id: 36,
    question:
      "If you have ever had thoughts of suice, when was the last time you considered it?",
    componentType: "singleChoice",
    answers: [
      "In the last 2 weeks",
      "Over 2 weeks ago.",
      "Over a month ago",
      "Over 3 months ago",
      "Over a year ago",
      "Never",
    ],
  },
  {
    id: 37,
    question: "How do you typically handle stress?",
    componentType: "singleChoice",
    answers: [
      "Retreat and seek solitude",
      "Talk to a close friend or family member",
      "Engage in physical activity (e.g., exercise, yoga)",
      "Use relaxation techniques (e.g., deep breathing, meditation)",
    ],
  },
  {
    id: 38,
    question: "What best describes your communication style?",
    componentType: "singleChoice",
    answers: [
      "Reserved and thoughtful",
      "Outgoing and expressive",
      "Analytical and precise",
      "Empathetic and compassionate",
    ],
  },
  {
    id: 39,
    question: "When faced with a challenge, what's your initial reaction?",
    componentType: "singleChoice",
    answers: [
      "Plan and strategize",
      "Dive in and take action",
      "Seek advice from others",
      "Reflect and evaluate",
    ],
  },
  {
    id: 40,
    question: "Which activity brings you the most joy?",
    componentType: "singleChoice",
    answers: [
      "Reading a book or watching a movie",
      "Spending time with loved ones",
      "Solving puzzles or playing games",
      "Being in nature or practicing mindfulness",
    ],
  },
];
