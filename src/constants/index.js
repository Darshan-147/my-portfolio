import scheduleX from '../assets/projects/scheduleX.png'
import ParkIT from '../assets/projects/ParkIT.png'
import myPortfolio from '../assets/projects/myPortfolio.png'
import Xpense from '../assets/projects/Xpense.png'

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like React, HTML and CSS as well as back-end technologies like Node.js, MySQL and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including React, Node.js, MySQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "May 2024 - July 2024",
    role: "Frontend Web Developer Intern",
    company: "Drop Techno Lab",
    description: `I worked on various frontend web development functionalities for developing and designing more than 7 sections of different pages of websites. Gained hands-on experience with various CDNs and libraries that come handy when developing instant websites. For example, bootstrap’s ready-made classes for responsiveness, various carousel libraries such as slick slider for creating a slideshow gallery.`,
    technologies: ["HTML", "CSS", "Bootstrap", "Javascript", "jQuery"],
  },
  {
    year: "May 2024",
    role: "Beta Tester",
    company: "Infiheal",
    description: `Worked here as a Beta Tester, testing the "Healo" chatbot. Found 5+ features that lacked functionalities and provided constructive feedback to enhance product functionalities, suggestions and bugs for chatbot qualities.`,
    technologies: ["Brainstorming"],
  },
  {
    year: "March 2024 – April 2024",
    role: "Management Intern",
    company: "Triquench India Pvt. Ltd.",
    description: `Got familiarized with the work culture, participated in their daily meetings and observed how to deal with people working under the supervisor, analyzing and assigning work and ensuring the team members remain aligned with task progress and deadlines.`,
    technologies: [],
  },
];

export const PROJECTS = [
  {
    title: "ScheduleX - CPU Algo Scheduler",
    image: scheduleX,
    description:
      "A fully functional simulator that demonstrates and implements usage of different CPU scheduling algorithms. Herein, 4 such algorithms have been implemented.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Darshan's Portfolio",
    image: myPortfolio,
    description:
      "A personal portfolio website showcasing my projects, skills, and contact information. Recursion exists :)",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
  },
  {
    title: "ParkIT - Smart Parking Management System",
    image: ParkIT,
    description:
    "Implemented parking management system using parking lot matrix. The matrix provides description about which slots are free and which ones are occupied.",
    technologies: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Trexpense - Expense Tracker",
    image: Xpense,
    description:
      "This tracker keeps the track of user's expenses and provides weekly, monthly as well as yearly analysis via charts.",
    technologies: ["HTML", "CSS", "JavaScript", "Django", "SQL"],
  },
];

export const CONTACT = {
  phone_number: "+91 81607 46102",
  email1: "darshaner2019@gmail.com",
  email2: "darshan.sce21@sot.pdpu.ac.in"
};
