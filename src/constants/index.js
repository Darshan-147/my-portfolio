import scheduleX from "../assets/images/projects/scheduleX.png";
import myPortfolio from "../assets/images/projects/myPortfolio.png";
import Xpense from "../assets/images/projects/Xpense.png";
import restReservation from "../assets/images/projects/restaurantReservation.png";
import UberClone from "../assets/images/projects/UberClone.png";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React, Vue, HTML and CSS as well as back-end technologies like Node.js, MySQL and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Vue, Node.js, MySQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. Outside of coding, I enjoy playing keyboard, going out on solo chai dates and yeah, chess is my favourite.`;

export const TECHNOLOGIES = [
  {
    id: "html",
    name: "HTML",
    textClass: "text-orange-500",
    hoverBorderClass: "hover:border-orange-300 dark:hover:border-orange-300",
  },
  {
    id: "css",
    name: "CSS",
    textClass: "text-blue-600",
    hoverBorderClass: "hover:border-blue-300 dark:hover:border-blue-300",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    textClass: "text-green-700",
    hoverBorderClass: "hover:border-green-400 dark:hover:border-green-400",
  },
  {
    id: "express",
    name: "Express",
    textClass: "text-gray-500",
    hoverBorderClass: "hover:border-gray-400 dark:hover:border-gray-400",
  },
  {
    id: "react",
    name: "React",
    textClass: "text-cyan-400",
    hoverBorderClass: "hover:border-cyan-200 dark:hover:border-cyan-200",
  },
  {
    id: "node",
    name: "Node",
    textClass: "text-green-500",
    hoverBorderClass: "hover:border-green-300 dark:hover:border-green-300",
  },
  {
    id: "git",
    name: "Git",
    textClass: "text-red-600",
    hoverBorderClass: "hover:border-red-300 dark:hover:border-red-300",
  },
  {
    id: "python",
    name: "Python",
    textClass: "text-yellow-400",
    hoverBorderClass: "hover:border-yellow-300 dark:hover:border-yellow-300",
  },
  {
    id: "vue",
    name: "Vue",
    textClass: "text-green-500",
    hoverBorderClass: "hover:border-green-300 dark:hover:border-green-300",
  },
];

export const EXPERIENCES = [
  {
    year: "April 2025 ~ August 2026",
    role: "Associate Software Engineer",
    company: "V2Solutions",
    url: "https://www.v2solutions.com/",
    description: [
      "Worked as a frontend developer on Vue for America's No. 3 retail mortgage company. Improved frontend performance by ~20% by refactoring components and optimizing state management. Reduced UI defects by ~30% by integrating QA validation early in the development lifecycle.",

      "Worked on building an AI Powered Error Monitoring platform where I implemented authentication and repository fetching using PATs and API tokens for version control and source code management platforms. Automated SCM error scans to fetch high-priority issues, create tickets, and manage pull requests.",
    ],
    technologies: [
      "Vue",
      "TypeScript",
      "GenAI",
      "React",
      "JavaScript",
      "FastAPI",
    ],
  },
  {
    year: "May 2024 ~ July 2024",
    role: "Frontend Web Developer Intern",
    company: "Drop Techno Lab",
    url: "https://www.droptechnolab.com",
    description: [
      "Designed and developed 7+ responsive website sections across multiple pages. Integrated CDNs and third-party libraries to accelerate development and enhance website functionality. Leveraged Bootstrap utility classes to implement responsive and mobile-friendly layouts. Developed interactive slideshow galleries using carousel libraries such as Slick Slider.",
    ],
    technologies: ["HTML", "CSS", "Bootstrap", "Javascript", "jQuery"],
  },
];

export const PROJECTS = [
  {
    title: "Restaurant Reservation Website",
    image: restReservation,
    description:
      "Developed a full-stack website that takes the hassle out of dining by enabling seamless online restaurant reservations. Featuring an intuitive and visually appealing UI paired with a robust and secure backend, this platform ensures a delightful user experience from booking to dining. Do come someday and enjoy your feast :)",
    technologies: ["MongoDB", "Express", "React", "NodeJS"],
    url: "https://restaurant-reservation-using-mern-stack.vercel.app",
  },
  {
    title: "Uber Clone",
    image: UberClone,
    description:
      "A clone of the Uber app that allows users to book rides, track their location, and make payments and lets drivers accept or reject the rides created by the user. This project is under development and more features may be added in the future. Stay tuned!",
    technologies: ["ORS Maps API", "MongoDB", "Express", "React", "NodeJS"],
    url: "https://github.com/Darshan-147/uber-clone",
  },
  {
    title: "ScheduleX - CPU Algo Scheduler",
    image: scheduleX,
    description:
      "A fully functional simulator that demonstrates and implements usage of different CPU scheduling algorithms. Herein, 4 such algorithms have been implemented.",
    technologies: ["HTML", "CSS", "JavaScript"],
    url: "https://github.com/Darshan-147/ScheduleX-OS-Project",
  },
  {
    title: "Darshan's Portfolio",
    image: myPortfolio,
    description:
      "A personal portfolio website showcasing my projects, skills, and contact information. Recursion exists :)",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
    url: "https://portfolio-of-darshansoni.vercel.app/",
  },

  {
    title: "Trexpense - Expense Tracker",
    image: Xpense,
    description:
      "This tracker keeps the track of user's expenses and provides weekly, monthly as well as yearly analysis via charts.",
    technologies: ["HTML", "CSS", "JavaScript", "Django", "SQL"],
    url: "https://github.com/Darshan-147/Expense-Tracker",
  },
];

export const ACHIEVEMENTS = [
  {
    title: "Top 5 / 125 teams in Ingenious Hackathon 6.0",
    date: "March 2025",
    image: "/src/assets/images/achievements/hackathon.jpeg",
    description:
      "Built a full-stack ML platform to assess farmer loan eligibility using real-world inputs by integrating an XGBoost model via a Flask API for real-time predictions. Developed a multilingual UI (6+ languages) to improve accessibility and usability. Designed a domain-specific chatbot with text-to-speech support.",
  },
  {
    title: "1st Runner-Up – YMCA Chess Championship ",
    date: "2023",
    image: "/src/assets/images/achievements/chess.jpg",
  },
  {
    title: 'Recognized as the "Top Web Development Voice" on LinkedIn (2×)',
    date: "August 2024, November 2024",
    image: "src/assets/images/achievements/top_web_dev_voice.png",
  },
  {
    title: "Merit-Cum-Means UG Scholar (2x)",
    date: "2022",
    description: "Earned 25% of the 4-year tuition fee.",
    image: "/src/assets/images/achievements/",
  },
];

export const CONTACT = {
  phone_number: "+91 81607 46102",
  email: "darshaninnovates@gmail.com",
};

export const calculateDuration = (range) => {
  const [startStr, endStr] = range.includes("~")
    ? range.split("~").map((s) => s.trim())
    : [range.trim(), range.trim()];

  const monthMap = {
    January: 0,
    February: 1,
    March: 2,
    April: 3,
    May: 4,
    June: 5,
    July: 6,
    August: 7,
    September: 8,
    October: 9,
    November: 10,
    December: 11,
  };

  const parseDate = (str) => {
    if (str.toLowerCase() === "present") {
      return new Date();
    }
    const [month, year] = str.split(" ");
    return new Date(Number(year), monthMap[month]);
  };

  const start = parseDate(startStr);
  const end = parseDate(endStr);

  // Difference in months
  const months =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth()) +
    1;

  // Format as "x months" or "x years y months"
  const years = Math.floor(months / 12);
  const remainingMonths = months % 12;

  if (years > 0 && remainingMonths > 0) {
    return `${years} year${years > 1 ? "s" : ""} ${remainingMonths} month${
      remainingMonths > 1 ? "s" : ""
    }`;
  } else if (years > 0) {
    return `${years} year${years > 1 ? "s" : ""}`;
  } else {
    return `${months} month${months > 1 ? "s" : ""}`;
  }
};
