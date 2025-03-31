// Define the Project interface
export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  highlights: string[];
  image: string;
  link: string;
  period: string;
}

// Export the projects data
export const projects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform built with Next.js, featuring product listings, cart functionality, user authentication, and payment integration.",
    technologies: ["Next.js", "React", "Node.js", "MongoDB", "Stripe API", "Tailwind CSS"],
    highlights: [
      "Implemented responsive design that works seamlessly across all devices",
      "Integrated Stripe payment gateway with custom checkout experience",
      "Built a comprehensive admin dashboard for inventory management",
      "Implemented real-time order tracking with WebSockets"
    ],
    image: "/ecommerce-project.jpg",
    link: "https://github.com/johndoe/ecommerce-platform",
    period: "Jun 2022 - Sep 2022"
  },
  {
    id: 2,
    title: "Task Management Application",
    description: "A collaborative task management tool inspired by Trello, allowing teams to organize projects, track progress, and manage deadlines efficiently.",
    technologies: ["React", "Redux", "Express", "PostgreSQL", "Socket.io", "Docker"],
    highlights: [
      "Built drag-and-drop interface for intuitive task management",
      "Implemented real-time collaboration features with Socket.io",
      "Created automated email notification system for task deadlines",
      "Designed and implemented role-based access control system"
    ],
    image: "/taskmanager-project.jpg",
    link: "https://github.com/johndoe/task-manager",
    period: "Jan 2021 - Apr 2021"
  },
  {
    id: 3,
    title: "Personal Finance Dashboard",
    description: "A dashboard for tracking personal finances, with expense categorization, budget planning, and data visualization features.",
    technologies: ["Vue.js", "Chart.js", "Firebase", "Tailwind CSS"],
    highlights: [
      "Created interactive charts for visualizing spending patterns",
      "Implemented budget planning features with notification alerts",
      "Built a receipt scanner using OCR technology",
      "Designed a responsive mobile-first interface"
    ],
    image: "/finance-project.jpg",
    link: "https://github.com/johndoe/finance-dashboard",
    period: "Aug 2020 - Nov 2020"
  }
];