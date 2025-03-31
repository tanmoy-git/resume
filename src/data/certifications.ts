export interface Certification {
  id: string;
  title: string;
  issuer: string;
  issueDate: string;
  expiryDate?: string;
  credentialId?: string;
  credentialURL?: string;
  description: string;
  skills: string[];
  image?: string;
}

export const certifications: Certification[] = [
  {
    id: "cert-1",
    title: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    issueDate: "Jan 2023",
    expiryDate: "Jan 2026",
    credentialId: "AWS-CSA-12345",
    credentialURL: "https://www.credly.com/badges/aws-certified",
    description: "Designed and deployed scalable, highly available systems on AWS. The certification validates the ability to design and implement distributed systems.",
    skills: ["AWS", "Cloud Architecture", "Security", "Networking"],
    image: "/aws-cert.png"
  },
  {
    id: "cert-2",
    title: "Professional Scrum Master I",
    issuer: "Scrum.org",
    issueDate: "Mar 2022",
    credentialId: "PSM-123456",
    credentialURL: "https://www.scrum.org/certificates",
    description: "Demonstrated fundamental knowledge of Scrum framework and ability to apply Scrum in team settings to deliver valuable products.",
    skills: ["Scrum", "Agile", "Project Management", "Team Leadership"],
    image: "/scrum-cert.png"
  },
  {
    id: "cert-3",
    title: "Google Professional Cloud Developer",
    issuer: "Google Cloud",
    issueDate: "Nov 2022",
    expiryDate: "Nov 2024",
    credentialId: "GCP-DEV-789123",
    credentialURL: "https://www.credential.net/google-cloud",
    description: "Built scalable and highly available applications using Google Cloud Platform. Demonstrated proficiency in cloud-native application development.",
    skills: ["Google Cloud", "Kubernetes", "Cloud Functions", "APIs"],
    image: "/gcp-cert.png"
  },
  {
    id: "cert-4",
    title: "Microsoft Certified: Azure Solutions Architect Expert",
    issuer: "Microsoft",
    issueDate: "Jul 2023",
    expiryDate: "Jul 2025",
    credentialId: "MS-AZ-305-123456",
    credentialURL: "https://learn.microsoft.com/en-us/certifications",
    description: "Designed and implemented solutions that run on Microsoft Azure, including aspects of compute, networking, storage, and security.",
    skills: ["Azure", "Cloud Security", "Microservices", "Hybrid Connectivity"],
    image: "/azure-cert.png"
  }
];