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

// Export the internships data
export const internships: Experience[] = [
  {
    id: 1,
    title: "Software Engineering Intern",
    company: "Innovate Tech Solutions",
    location: "Singapore",
    period: "May 2016 - Aug 2016",
    description: [
      "Developed frontend components for a customer relationship management system using React",
      "Collaborated with senior developers to implement RESTful API endpoints using Node.js",
      "Participated in code reviews and improved code quality through unit testing",
      "Assisted in database optimization which improved query response times by 25%"
    ],
    skills: ["JavaScript", "React", "Node.js", "MongoDB", "Git"]
  },
  {
    id: 2,
    title: "Web Development Intern",
    company: "Creative Digital Studios",
    location: "Remote",
    period: "Jan 2016 - Apr 2016",
    description: [
      "Built responsive web pages for client websites using HTML, CSS, and JavaScript",
      "Implemented UI designs from Figma mockups with high fidelity",
      "Optimized website performance and loading times using modern web techniques",
      "Gained practical experience with version control systems and collaborative development"
    ],
    skills: ["HTML/CSS", "JavaScript", "Bootstrap", "jQuery", "Responsive Design"]
  }
];