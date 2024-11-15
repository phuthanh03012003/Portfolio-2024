import {
    dictionary,
    wine,
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
    fanta,
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
        "Reduced daily 1000+ in-person visits by creating an online credit approval system for the Home Loan Department",
        "Produced a 90% accurate decision for loan approval based on user's information through the Random Forest algorithm",
        "Achieved a 95% faster qualification determination by utilizing the Areal API for mortgage documentation processing",
        "Designed multi-factor authentication using OAuth 3.0 to ensure secure and strictly validated database access for staff",
        "Technologies used: C#, .NET, Python, RESTful API, OAuth 3.0, Ember.js",
      ],
    },
    {
      title: "Software Engineer Intern",
      company_name: " Charoen Pokphand Group",
      icon: cp,
      iconBg: "#E6DEDD",
      date: "June 2024 - August 2024",
      points: [
        "Engineered a full-stack application for 10,000+ farmers, streamlining quality control across the agricultural supply chain",
        "Streamlined input processes by designing an interactive user interface with 50+ APIs, reducing 20% input time",
        "Designed an ARIMA-based model to predict tree growth patterns across Thailand, boosting food security by 79%",
        "Developed an automated system to inform users of optimal tree planting and watering times based on environment data",
        "Technologies used: React.js, PostgreSQL, AWS, Docker, RESTful API, ARIMA time-series-model",
      ],
    },
    {
      title: "Computer Lab Assistant",
      company_name: "Texas Christian University",
      icon: tcu,
      iconBg: "#E6DEDD",
      date: "September 2023 - Present",
      points: [
        "Resolve 30+ students’ tickets daily on Windows and MAC OS, achieving an 80% increase in user satisfaction",
        "Enhance security for 100+ lab workstations by using Active Directory to manage user accounts and permissions",
        "Conduct regular maintenance and updates on lab equipment, ensuring optimal performance and minimizing disruptions",
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
      name: "Southern Glazers' Analyst",
      description:
        "The SGWS Brand Explorer is an interactive web app that lets users explore and create brand-specific cocktails by selecting flavors and themes. It provides tailored recipes for users through a fun, game-like experience.",
      tags: [
        {
          name: "Next.js",
          color: "blue-text-gradient",
        },
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: wine,
      source_code_link: "https://github.com/MarkPhamm/Southern-Glazers-Brand-Explorer",
    },
    {
      name: "Fanta Movie Website",
      description:
        "Fanta is a movie platform designed for students to explore documentary films. It features secure login, film listings, search, ratings, comments, and streaming, with MongoDB handling data management.",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "Express.js",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: fanta,
      source_code_link: "https://github.com/HuyLemm/Fanta",
    },
    {
      name: "Quick dictionary",
      description:
        "The Quick Dictionary App offers quick access to definitions, synonyms, and pronunciation, with features like example sentences, favorite words, and daily word suggestions for easy language learning and reference.",
      tags: [
        {
          name: "JavaScript",
          color: "blue-text-gradient",
        },
        {
          name: "REST API",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: dictionary,
      source_code_link: "https://github.com/phuthanh03012003/Quick-dictionary",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };