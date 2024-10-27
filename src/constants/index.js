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
    tcu,
    cp,
    millennia,
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
      icon: millennia,
      iconBg: "#E6DEDD",
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
      icon: cp,
      iconBg: "#E6DEDD",
      date: "June 2024 - August 2024",
      points: [
        "Managed over 600 computers, including setting up IP and MAC addresses, ensuring firewall and security for work-from-home employees with Cisco Firepower Management Center.",
        "Configured and maintained Microsoft SQL Server by creating and maintaining regular backup schedules, including full, differential, and transaction log backups, enhancing system performance and uptime by 30%.",
        "Assisted in troubleshooting internal software application issues via TeamViewer for over 150 employees, analyzing and addressing each case end-to-end.",
      ],
    },
    {
      title: "Computer Lab Assistant",
      company_name: "Texas Christian University",
      icon: tcu,
      iconBg: "#E6DEDD",
      date: "September 2023 - Present",
      points: [
        "Provide assistance to an average of 30+ students daily on Windows OS, Microsoft Office.",
        "Engaged in evaluating Google Workspace and emerging software, contributing to technology improvement.",
        "Resolved 95% of user-reported issues using Jira, enhancing system uptime and user satisfaction.",
      ],
    },
    // {
    //   title: "Full stack Developer",
    //   company_name: "Fanta Movie Website",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "June 2024 - October 2024",
    //   points: [
    //     "Constructed a movie website for 500 students to learn about documentary film, using React.js and Express.js.",
    //     "Implemented secure user account creation and login functionality with Bcrypt for password encryption, JWT for authentication, and Nodemailer for email verification.",
    //     "Utilized MongoDB for efficient storage and retrieval of user accounts and movie information.",
    //     "Integrated JavaScript to create five features, including film listing, search, rating, comments, and streaming.",
    //   ],
    // },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Ethan proved me wrong.",
      name: "Vince Pham",
      designation: "CTO",
      company: "Millennia Software",
      image: "https://media.licdn.com/dms/image/v2/D5603AQEw2SeRsQu6lg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1729969946067?e=1735776000&v=beta&t=N9c0Fhhe9dPri2hDfGlLBt-PSLZ1yB4NtFr25LZJ6Pc",
    },
    {
      testimonial:
        "I've never met a developer who truly cares about their team's success like Ethan does.",
      name: "Kevin Doan",
      designation: "Sophomore in Computer Science",
      company: "Texas Christian University",
      image: "https://media.licdn.com/dms/image/v2/D5603AQGmId5A-z9pQQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1711215620564?e=1735776000&v=beta&t=jDlmqiJ6difPthddgA1MwLSF-zKyf8GL2KM3r822y54",
    },
    {
      testimonial:
        "Ethan's dedication and grasp of complex concepts in computer science are truly impressive, and I have no doubt he will achieve great things in the field.",
      name: "Bingyang Wei",
      designation: "Associate Professor",
      company: "Computer Science at Texas Christian University",
      image: "https://media.licdn.com/dms/image/v2/C4D03AQEZ5ahrPqK9xw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1517581282152?e=1735776000&v=beta&t=ahVkhal3CtZCo9nZog_tn04w4kKNSUTqISKCqQVdkto",
    },
  ];
  
  const projects = [
    {
      name: "Southern Glazers Brand Explorer",
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
      name: "Fanta Movie Website",
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