// Define the Experience interface
export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
  skills: string[];
}

// Export the experiences data
export const experiences: Experience[] = [
  {
    id: 1,
    title: "Senior Frontend Developer",
    company: "Tech Solutions Inc.",
    location: "San Francisco, CA",
    period: "Jan 2022 - Present",
    description: [
      "Led a team of 5 developers in building a modern React-based dashboard that improved client data visualization by 40%",
      "Implemented performance optimizations that reduced load time by 60% and improved user engagement",
      "Collaborated with UX designers to create intuitive interfaces that increased user retention by 25%",
      "Mentored junior developers and established code review practices that reduced bugs in production by 30%"
    ],
    skills: ["React", "TypeScript", "Redux", "Jest", "CI/CD"]
  },
  {
    id: 2,
    title: "Full Stack Developer",
    company: "WebApp Innovations",
    location: "Austin, TX",
    period: "Mar 2019 - Dec 2021",
    description: [
      "Developed and maintained multiple web applications serving 10,000+ monthly active users",
      "Created RESTful APIs and microservices using Node.js and Express",
      "Built responsive front-end interfaces using React and Material UI",
      "Implemented automated testing with Jest and Cypress, achieving 85% test coverage"
    ],
    skills: ["JavaScript", "React", "Node.js", "Express", "MongoDB", "AWS"]
  },
  {
    id: 3,
    title: "Junior Developer",
    company: "Digital Creations",
    location: "Chicago, IL",
    period: "Jun 2017 - Feb 2019",
    description: [
      "Assisted in the development of e-commerce platforms using React and Redux",
      "Fixed bugs and implemented new features based on client feedback",
      "Participated in daily stand-ups and biweekly sprint planning",
      "Contributed to the company's internal component library"
    ],
    skills: ["HTML/CSS", "JavaScript", "React", "Git"]
  }
];