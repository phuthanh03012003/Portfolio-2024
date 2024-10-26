import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "UI/UX Designer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Software Engineer Intern",
      company_name: "Millennia Software",
      icon: starbucks,
      iconBg: "#383E56",
      date: "April 2024 - June 2024",
      points: [
        "Developed a web-based Credit Qualification Application for the Home Loan Department allowing customers to receive loan approvals online, eliminated over 100 in-person visits daily.",
        "Built dynamic front-end components for 10 web pages, including tables, buttons, and modals, using Ember.js.",
        "Developed a .NET back-end system to evaluate customer mortgage qualifications by comparing eligibility factors.",
        "Collaborated with AI engineers to build a document scanning application, utilizing TensorFlow for optical character recognition and Modin to process large datasets, reducing data input time by 40% while achieving 90% accuracy.",
      ],
    },
    {
      title: "IT Intern",
      company_name: "C.P Vietnam Corporation",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "June 2024 - August 2024",
      points: [
        "Managed over 600 computers, including setting up IP and MAC addresses, ensuring firewall and security for work-from-home employees with Cisco Firepower Management Center.",
        "Configured and maintained Microsoft SQL Server by creating and maintaining regular backup schedules, including full, differential, and transaction log backups, enhancing system performance and uptime by 30%.",
        "Assisted in troubleshooting internal software application issues via TeamViewer for over 150 employees, analyzing and addressing each case end-to-end.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Southern Glazers Brand Explorer",
      icon: shopify,
      iconBg: "#383E56",
      date: "August 2024 - October 2024",
      points: [
        "Collaborated with a team of 5 full-stack developers to create an interactive web application for 1,000 customers to explore wine brands, leveraging Python and Next.js.",
        "Implemented a TypeScript-based interactive game using RESTful APIs and clustering algorithms to personalize wine recommendations, improving filtering efficiency by 50%.",
        "Integrated PostgreSQL through SupaBase for efficient database management and used Pandas for analytics, providing data-driven wine suggestions and insights that boosted product engagement by 20%.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Fanta Movie Website",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "June 2024 - October 2024",
      points: [
        "Constructed a movie website for 500 students to learn about documentary film, using React.js and Express.js.",
        "Implemented secure user account creation and login functionality with Bcrypt for password encryption, JWT for authentication, and Nodemailer for email verification.",
        "Utilized MongoDB for efficient storage and retrieval of user accounts and movie information.",
        "Integrated JavaScript to create five features, including film listing, search, rating, comments, and streaming.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };