import { node, ltimindtree, react } from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "experience",
    title: "experience",
  },
  {
    id: "feedbacks",
    title: "feedbacks",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "React JS Developer",
    icon: react,
  },
  {
    title: "Node JS Developer",
    icon: node,
  },
];

const experiences = [
  {
    title: "Senior Software Engineer (Managing Position)",
    Company_name: "LTIMindtree",
    icon: ltimindtree,
    iconBg: "#356d48ff",
    date: " May 2024 - Present",
    points: [
      "API Development & Security - Worked on Back-End Programs for Creating APIs with Authentication and Authorization for secure connections in Node JS.",
      "Database Integration - Worked on Databases like SQL connection with Node JS connectivity.",
      "Workflow Automation & Error Handling - Monitoring Power Automate Flows,Program Workflows and solving the errors which occur in it. ",
      "UX Collaboration & Customer Experience Improvement - Worked closely with the UX department, resulting in a more refined product which boosted customer satisfaction scores by 12%.",
      "DevOps Integration & Release Optimization - Collaborated with the DevOps team to create a product roadmap for a software product using continuous integration and continuous delivery (CI/CD), reducing software release times by 45%.",
      "Backend Performance Optimization - Optimized backend API using Node.js and Express.js, contributing to a 40% decrease in server response time.",
      "Feature Development & UX Enhancement - Collaborated with UX designers to implement new features that increased user engagement by 30%",
    ],
  },
  {
    title: "Senior Software Engineer",
    Company_name: "LTIMindtree",
    icon: ltimindtree,
    iconBg: "#356d48ff",
    date: " June 2022 – May 2024",
    points: [
      "Front-End Development - Developed client-facing front-end applications using React JS tailored to specific user needs.",
      "React.js Component Design - Built reusable functional components and utilized React Hooks for enhanced modularity and performance.",
      "Feature Enhancement & User Satisfaction - Implemented new features and fixed issues in JavaScript applications using React, Redux, and ES6, resulting in a 20% boost in user satisfaction.",
      "Front-End Optimization & Bundle Size Reduction - Reduced application bundle size by 60% through strategic tree-shaking and code splitting techniques.",
      "UI Development Acceleration with Component Architecture - Improved UI development speed by 35% by adopting a component-based architecture in React and Redux.",
      "Team Mentorship & Productivity Improvement - Mentored three junior developers, fostering growth and improving overall team productivity by 30%.",
      "Performance Optimization Across Connected Devices - Achieved a 25% reduction in load time by optimizing components for seamless performance across diverse internet-connected devices.",
    ],
  },
  {
    title: "Software Engineer",
    Company_name: "LTIMindtree",
    icon: ltimindtree,
    iconBg: "#356d48ff",
    date: " August 2019 – May 2022",
    points: [
      "Workflow Automation & Error Handling - Monitored Power Automate Flows and programmed workflows to detect and resolve errors effectively.",
      "Platform Support & JavaScript Enhancements - Provided client-side support in Kronos, ServiceNow, UC4, and Business Process Apps, implementing JavaScript updates and improvements.",
      "Data Analysis & Insights - Utilized R to analyze historical ticket data, uncovering actionable trends and insights.",
      "Reporting Automation - Automated monthly reports using Python, eliminating one full day of manual effort per cycle.",
      "IT Support & Issue Resolution - Managed support tickets by tracking, logging, and resolving user account issues, software incidents, and technical challenges.",
      "Critical Task Support - Delivered high-priority client support during and beyond standard working hours, ensuring uninterrupted service.",
      "DevOps Reporting Automation - Streamlined reporting for Jira, Jenkins, and Bitbucket by automating processes with PowerShell.",
    ],
  },
  {
    title: "Engineer-Trainee",
    Company_name: "LTIMindtree",
    icon: ltimindtree,
    iconBg: "#356d48ff",
    date: "May 2019 – August 2019",
    points: [
      " Front-End Development Support & UI Consistency - Trained and assisted in front-end development tasks using .NET, improving user interface consistency.",
      "API Testing & Integration Improvement - Tested and documented APIs using Postman.",
      "Agile Collaboration & Team Communication - Participated in Agile ceremonies such as daily stand-ups and sprint reviews, enhancing team communication.",
      "Award-Winning Final Project Implementation - Worked on final project using .NET and SQL and earned the 'BEST PROJECT AWARD' along with formal appreciation.",
    ],
  },
];

export { services, experiences };
