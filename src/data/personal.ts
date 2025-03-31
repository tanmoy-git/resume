// Define the Personal Information interface
export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  github: string;
  summary: string;
  profileImage: string;
  skills: string[];
  education: Education[];
}

// Define the Education interface
export interface Education {
  degree: string;
  institution: string;
  period: string;
}

// Export the personal information data
export const personalInfo: PersonalInfo = {
  name: "John Doe",
  title: "Full Stack Developer",
  email: "john.doe@example.com",
  phone: "(123) 456-7890",
  github: "github.com/johndoe",
  summary: "I'm a passionate Full Stack Developer with 5+ years of experience building web applications using modern technologies. Specializing in JavaScript frameworks like React and Node.js, I enjoy creating intuitive user interfaces and scalable back-end solutions. I'm committed to writing clean, maintainable code and staying updated with the latest industry trends.",
  profileImage: "/profile.jpg",
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "HTML/CSS",
    "GraphQL",
    "Git",
    "Docker",
    "AWS",
    "Next.js"
  ],
  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      institution: "University of Technology",
      period: "2015 - 2019"
    }
  ]
};