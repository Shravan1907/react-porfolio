import emoji from "react-easy-emoji";
import {
  EducationType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
  CertificationType,
} from "./types/sections";

export const greetings: GreetingsType = {
  name: "Shravan Kumar",
  title: "Hi all, I'm Shravan",
  description:
    "I'm a passionate Full Stack web developer with experience developing Full Stack web applications with Java, MongoDB, React.js, CSS, Nodejs, and mySQl. I am strongly interested in learning new technologies and implementing them in my projects. I'm a self-motivated and hardworking individual who is always ready to learn new things and work in a team.",
  resumeLink: "https://drive.google.com/file/d/1y5fXvRqqs_n7eEd3z45xsKQox8FBxbV8/view",
};

export const openSource = {
  githubUserName: "Shravan1907",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:skshravan1907@gmail.com",
  linkedin: "https://www.linkedin.com/in/shravan-kumar-582485299/",
  github: "https://github.com/Shravan1907",
  instagram: "https://www.instagram.com/i_shravan_kr/",
  // facebook: 'https://www.facebook.com/1hanzla100',
  // twitter: 'https://twitter.com/1hanzla100',
};

export const skillsSection: SkillsSectionType = {
  title: "What I do?",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js"),
        emoji("⚡ Building responsive static websites using Next.js"),
        emoji("⚡ Building RESTful APIs in express & Nodejs REST Framework"),
      ],
      softwareSkills: [
        {
          skillName: "Java",
          iconifyTag: "logos:ava",
        },
        {
          skillName: "Django",
          iconifyTag: "vscode-icons:file-type-django",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Nextjs",
          iconifyTag: "vscode-icons:file-type-light-next",
        },
        {
          skillName: "AWS",
          iconifyTag: "logos:aws",
        },
        
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "80", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "70",
  },
  {
    Stack: "Programming",
    progressPercentage: "75",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "University of Engineering and Management ,jaipur",
    subHeader: "Bachelor of Science in Computer Science",
    duration: "September 2021 - April 2024",
    desc: "",
    descBullets: [], // Array of Strings
  },
  {

    schoolName: "Govt Polytechnic Dhanbad",
    subHeader: "Diploma in Electrical Engg.",
    duration: "September 2018 - May 2021",
    desc: "",
    descBullets: [], // Array of Strings
  },
  {

    schoolName: "Carmel School Kargali",
    subHeader: "Higher Secondary School Certificate ",
    duration: "March 2017 - April 2018",
    desc: "",
    descBullets: [], // Array of Strings
  },
];
export const certification: CertificationType[] = [
  {
    certificationName: "Introduction to Android Mobile Application",
    source: "Coursera",
    sourceLogo: "/img/icons/common/meganos.png",
    date: "20 jan 2023-20 feb 2023 ",
    desc: "Define the Fundamental concepts of Android app development, Set up and explore the Android Studio interface, configurations and built-in tools, Use Kotlin Playground,Create a simple Android app",
    link:"https://coursera.org/verify/SFUSZ4G4XTYP",
  },
  {
    certificationName: "Developing Sites for the Web",
    source: "IBM SkillBuild",
    sourceLogo: "/img/icons/common/ibm.png",
    date: "20 feb 2024-20 Mar 2024",
    desc: "Explain the structure, functions, and evolution of HTML,  the features and functions of CSS,  the features and functions of JavaScript, JavaScript interacts with CSS and HTML, phases in the software development lifecycle (SDLC), the scrum framework",
    link:"https://skills.yourlearning.ibm.com/certificate/share/bca1cee8e0ewogICJvYmplY3RUeXBlIiA6ICJBQ1RJVklUWSIsCiAgImxlYXJuZXJDTlVNIiA6ICIyNTM2MDY0UkVHIiwKICAib2JqZWN0SWQiIDogIk1ETC0yNjIiCn057664f447d-10",
  },
  {
    certificationName: "Web Development Basics",
    source: "IBM SkillBuild",
    sourceLogo: "/img/icons/common/ibm.png",
    date: "12 feb 2024-12 Mar 2024",
    desc: "",
    link:"https://skills.yourlearning.ibm.com/certificate/MDL-261",
  },
  {
    certificationName: "The Joy of Computing using Python",
    source: "Nptel",
    sourceLogo: "/img/icons/common/nptel.jpeg",
    date: " july 2022-oct 2022",
    desc: "",
    link:"https://drive.google.com/file/d/1Scb-TLCdz4Q2LbeV6P4sFMY9CJLPBzbd/view?usp=drive_link",
  },
  {
    certificationName: "Programming In Java",
    source: "Nptel",
    sourceLogo: "/img/icons/common/nptel.jpeg",
    date: " july 2023-oct 2023",
    desc: "",
    link:"https://drive.google.com/file/d/1PLMXWNH6_AMiTv72OZVrofe50wKvGFia/view?usp=drive_link",
  },
];

export const projects: ProjectType[] = [
  {
    name: "React-Portfolio",
    desc: "Software Developer Portfolio Template built with react.js and next.js bootstrap that helps you showcase your work and skills as a software developer.",
    github: "https://github.com/Shravan1907/react-porfolio",
    link: "https://reactporfolio-shravan.netlify.app/",
  },
  {
    name: "Fake Product Identification ",
    desc: "Enable retailers and consumers to verify product authenticity in real-time by scanning a QR code or using a mobile app integrated with the blockchain platform.",
    link: "https://github.com/Shravan1907/blockchain",
  },
  {
    name: "React-Chat-App",
    desc: "The frontend of the chat app is developed using React.js, a popular JavaScript library for building user interfaces.Firebase is used as the backend service for the chat app. Firebase provides several services that are crucial for a real-time chat application",
    github: "https://github.com/Shravan1907/react-chat-App",
    link: "https://shravan-chat-app.netlify.app/",
  },
 
];


// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Shravan kumar",
  description: greetings.description,
  author: "Shravan kumar",
  image: "https://avatars.githubusercontent.com/u/59178380?v=4",
  url: "https://developer-portfolio-1hanzla100.vercel.app",
  keywords: [
    "Shravan",
    "Shravan kumar",
    "shravan1907",
    "Shravan1907",
    "Portfolio",
    "Shravan Portfolio ",
    "Shravan's Portfolio",
  ],
};
