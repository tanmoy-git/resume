// Define the Personal Information interface
export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  githubLinks: GithubLink[];
  linkedin: string;
  summary: string;
  profileImage: string;
  skills: string[];
  education: Education[];
}

// Define the GitHub Link interface
export interface GithubLink {
  url: string;
  label: string;
}

// Define the Education interface
export interface Education {
  degree: string;
  institution: string;
  period: string;
}

// Export the personal information data
export const personalInfo: PersonalInfo = {
  name: "Tanmoy Bhattacharjee",
  title: "Senior Engineering Manager",
  email: "engg.tanmoy@gmail.com",
  phone: "+65 89096344",
  githubLinks: [
    {
      url: "https://github.com/tanmoy-git",
      label: "Personal: tanmoy-git"
    },
    {
      url: "https://github.com/tanmoy-work",
      label: "Work: tan-dd"
    }
  ],
  linkedin: "https://www.linkedin.com/in/tanmoy-linkdin/",
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
      degree: "Bachelor of Engineerin in Computer Science & Engineering",
      institution: "PSG College of Technology, Anna University",
      period: "2009 - 2013"
    }
  ]
};