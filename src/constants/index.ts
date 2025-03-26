import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  threejs,
  project1,
  project2,
  project3,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Experience",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Software Developer",
    icon: web,
  },
  {
    title: "FullStack Developer",
    icon: reactjs,
  },
  {
    title: "QA Engineer",
    icon: javascript,
  },
  {
    title: "DevOps Enginner",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Software Developer",
    company_name: "Outlier AI",
    icon: mobile,
    iconBg: "#383E56",
    date: "Nov 2024 - Present",
    points: [
      "Developing and maintaining web applications using React, JavaScript, and other modern technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers.",
      "Implemented comprehensive test automation frameworks using TypeScript to ensure code quality and reliability",
      "Participating in code reviews and contributing to best coding practices.",
    ],
  },
  {
    title: "Apprentice Developer",
    company_name: "Software District",
    icon: web,
    iconBg: "#E6DEDD",
    date: "June 2023 - Nov 2024",
    points: [
      "Trained in modern web development techniques and best practices.",
      "Worked on real-world projects using JavaScript, React, and Node.js.",
      "Developed skills in responsive UI development and API integration.",
      "Collaborated with senior developers to learn software architecture and design patterns.",
    ],
  },
  {
    title: "Education",
    company_name: "Fullstack Academy",
    icon: backend,
    iconBg: "#383E56",
    date: "Completed 2023",
    points: [
      "Studied core computer science principles, data structures, and algorithms.",
      "Focused on web development technologies and software engineering practices.",
      "Worked on collaborative team projects to build real-world applications.",
      "Developed strong problem-solving and analytical skills through coursework.",
    ],
  },
];

const projects = [
  {
    name: "E-Commerce Platform",
    description:
      "Designed and executed test plans for a full-stack e-commerce application. Implemented end-to-end testing using TypeScript and Selenium.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/",
  },
  {
    name: "Automated Testing Framework for Job Finder Application",
    description:
      "Developed a comprehensive test automation framework using Python and TypeScript. Implemented API testing for RESTful endpoints. Integrated testtests with CI/CD pipeline for continuous quality assurance",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "redux",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/",
  },
  {
    name: "AI Assistant (Jarvis)",
    description:
      "Developed test cases to validate AI response accuracy and performance. Imlemented automated regression testing to ensure consistent functionality.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "api",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, projects, experiences }; 