import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    carrent,
    jobit,
    adminpro,
    iccrenacer,
    bienes_raices,
    control_citas,
    control_gastos,
    blog_cafe,
    tripguide,
    threejs,
    lilab,
    talent,
    mibanco,
    sql

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
      title: "Full Stack Developer",
      icon: mobile,
    },
    {
      title: "Frontend Developer",
      icon: backend,
    },
    {
      title: "React JS Developer",
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
      name: "React JS",
      icon: reactjs,
    },

    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "git",
      icon: git,
    }
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Lima Lab Inovation",
      icon: lilab,
      iconBg: "#383E56",
      date: "September 2020 - October 2020",
      points: [
        "Building the user interface for a web application of a financial company",
        "Collaborating with cross-functional teams including QA, product managers, and other developers to create the web app.",
  
      ],
    },
    {
      title: "Junior Programmer",
      company_name: "Talent.com",
      icon: talent,
      iconBg: "#E6DEDD",
      date: "November 2020 - January 2021",
      points: [
        "Creating algorithms for the web scraping processes of the company",
        "Participating in team strategy meetings.",    
      ],
    },
    {
      title: "Analist - Full Stack Developer",
      company_name: "Mi Banco Colombia",
      icon: mibanco,
      iconBg: "#383E56",
      date: "February 2021 - March 2023",
      points: [
        "Developing a web app used by almost all the employees at the bank",
        "Developing the improvements required by the bank's commercial network.",
        "Managing the data related to all credits, customers, and advisors of the bank",
        "Participating in meetings with the user to include new features",
      ],
    }
    //,
    // {
    //   title: "Full stack Developer",
    //   company_name: "Meta",
    //   icon: meta,
    //   iconBg: "#E6DEDD",
    //   date: "Jan 2023 - Present",
    //   points: [
    //     "Developing and maintaining web applications using React.js and other related technologies.",
    //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //     "Implementing responsive design and ensuring cross-browser compatibility.",
    //     "Participating in code reviews and providing constructive feedback to other developers.",
    //   ],
    // },
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
      name: "AdminPro",
      description:
        "A web app to manage projects and tasks by marking them as pending or done. It includes CRUD operations for projects and associated tasks. To access these features, users need to sign up on AdminPro.",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "Mongodb",
          color: "green-text-gradient",
        },
        {
          name: "Node.js",
          color: "pink-text-gradient",
        },
      ],
      image: adminpro,
      source_code_link: "https://github.com/BrianOlaya",
      link:"https://mystifying-ptolemy-e3a6ec.netlify.app/"
    },
    {
      name: "ICC Renacer",
      description:
        "Web application that show information of a christian comunity, the mettings, devotionals and differents ativities.This application count with a exclusive section to the staff to register their disciples.",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "Mongodb",
          color: "green-text-gradient",
        },
        {
          name: "Node.js",
          color: "pink-text-gradient",
        },
      ],
      image: iccrenacer,
      source_code_link: "https://github.com/BrianOlaya",
      link:"https://www.iccrenacer.com/"
    },
    {
      name: "Bienes Raices",
      description:
        "Static web site of a inmobiliary company that show information of houses and apartments, also contain informartion about the company, pricing, contact form and testimonials.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Responsive design",
          color: "pink-text-gradient",
        },
      ],
      image: bienes_raices,
      source_code_link: "https://github.com/BrianOlaya",
      link:"https://happy-franklin-7623f3.netlify.app/"
    },
    {
      name: "Control presupuesto",
      description:
        "A web app that enables users to have budget control. This application saves the initial budget in local storage, lists all the expenses, and provides warnings based on the remaining budget.",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "local storage",
          color: "pink-text-gradient",
        },
      ],
      image: control_gastos,
      source_code_link: "https://github.com/BrianOlaya",
      link:"https://flamboyant-poitras-03ff96.netlify.app/"
    },
    {
      name: "Agendamiento de citas",
      description:
        "A web app thar enables users to manage all appointments of thier clients. It allows to register the name, telephone number, appoiment day and observations. This app could be usefull for small busissnes.",
      tags: [
        {
          name: "React.js",
          color: "blue-text-gradient",
        },
        {
          name: "Bootstrap",
          color: "green-text-gradient",
        },
        {
          name: "local storage",
          color: "pink-text-gradient",
        },
      ],
      image: control_citas,
      source_code_link: "https://github.com/BrianOlaya",
      link:"https://boring-fermi-422910.netlify.app/"
    },
    {
      name: "Blog Café",
      description:
        "The Blog Café contains information about courses for all people who enjoy preparing coffee. It also covers various topics of interest such as recipes, the benefits of coffee, and much more.",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "Responsive design",
          color: "pink-text-gradient",
        },
      ],
      image: blog_cafe,
      source_code_link: "https://github.com/BrianOlaya",
      link:"https://xenodochial-kepler-e6b372.netlify.app/"
    }
  ];
  
  export { services, technologies, experiences, testimonials, projects };