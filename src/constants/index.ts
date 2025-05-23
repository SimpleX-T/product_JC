import { NewsArticle } from "../types";

export const features = [
  {
    iconType: "image",
    iconSrc: "/icons/users.svg",
    iconAlt: "user information",
    title: "User Information",
    description:
      "Collect and organize detailed information about your leads, including contact details, company information, and interaction history.",
  },
  {
    iconType: "image",
    iconSrc: "/icons/deal.svg",
    title: "Deal Tracking",
    description:
      "Monitor the progress of deals through your sales pipeline, with customizable stages and automated notifications for status changes.",
  },
  {
    iconType: "image",
    iconSrc: "/icons/pipeline.svg",
    title: "Pipeline Management",
    description:
      "Track and manage engineering positions, including job requirements, candidate pipelines, and hiring progress for your team.",
  },
  {
    iconType: "image",
    iconSrc: "/icons/report.svg",
    title: "Reporting Dashboard",
    description:
      "Access comprehensive analytics and reports to gain insights into your team's performance, deal flow, and conversion rates.",
  },
  {
    iconType: "image",
    iconSrc: "/icons/meeting.svg",
    title: "Meeting Scheduling",
    description:
      "Simplify the process of scheduling meetings with leads and team members, with calendar integration and automated reminders.",
  },
  {
    iconType: "image",
    iconSrc: "/icons/email.svg",
    title: "Email Tracking",
    description:
      "Track email opens, clicks, and responses to optimize your communication strategy and follow-up timing with potential clients.",
  },
];

export const newsArticles: NewsArticle[] = [
  {
    title: "Product Mail is taking on Gmail by betting on privacy",
    details:
      "Ramet consectetur. Est porttitor mattis pharetra sit id viverra. Vivamus mauris augue pharetra cras turpis faucibus elit urna.",
    date: "February 8, 2023",
    image: "/images/privacy.svg",
  },
  {
    title: "Wants You To Sign Out Of Google Workspace Forever",
    details:
      "Est porttitor mattis pharetra sit id viverra. Vivamus mauris augue pharetra cras turpis faucibus elit urna.",
    date: "February 8, 2023",
    image: "/images/workspace.svg",
  },
  {
    title: "The Best Email Encryption Services for 2023",
    details:
      "Dorttitor mattis pharetra sit id viverra. Vivamus mauris augue pharetra cras turpis faucibus elit urna.",
    date: "February 8, 2023",
    image: "/images/encryption.svg",
  },
];
