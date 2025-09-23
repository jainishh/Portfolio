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
  freelance,
  shopify,
  sheryians,
  priary,
  mr,
  gokul,
  sk,
  macbookpro,
  falverra,
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
    title: "Education",
  },

  {
    id: "skills",
    title: "Skills",
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
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "MERN Stack",
    icon: creator,
  },
];

const technologies = [
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
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "Node JS",
    icon: nodejs,
  },

  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },

  {
    name: "Redux Toolkit",
    icon: redux,
  },

  {
    name: "MongoDB",
    icon: mongodb,
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
    name: "figma",
    icon: figma,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Jetalvasana Primary School",
    company_name: "Primary School",
    icon: priary, // Replace with any icon you like
    iconBg: "#ffff",
    date: "2011 - 2019",
    points: [
      "Completed Primary Education (1st to 8th standard).",
      "Gained essential knowledge in all core subjects.",
      "Took part in extracurricular and cultural activities.",
      "Built strong early academic foundation.",
    ],
  },
  {
    title: "Shree M.R. Sarv Vidhyalay, Jetalvasana",
    company_name: "Secondary School",
    icon: mr, // Or institute logo
    iconBg: "#ffff",
    date: "2019 - 2021",
    points: [
      "Completed Secondary Education (9th & 10th standard).",
      "Studied core academic subjects with focus on mathematics.",
      "Engaged in school-level academic competitions.",
      "Built a foundation for higher secondary studies.",
    ],
  },
  {
    title: "Gokul Science School, Siddhpur",
    company_name: "Higher Secondary (PCM)",
    icon: gokul, // Replace with any icon you like
    iconBg: "#ffff",
    date: "2021 - 2023",
    points: [
      "Completed Higher Secondary Education (11th & 12th) in PCM stream.",
      "Strengthened fundamentals in Physics, Chemistry, and Mathematics.",
      "Participated in science-related academic activities.",
      "Prepared for competitive and engineering entrance exams.",
    ],
  },
  {
    title: "Sankalchand Patel College of Engineering, Visnagar",
    company_name: "B.Tech in Information Technology",
    icon: sk, // Or institute logo
    iconBg: "#ffff",
    date: "2023 - Present",
    points: [
      "Pursuing B.Tech in Information Technology.",
      "Gaining knowledge in Data Structures, Algorithms, and Web Technologies.",
      "Developing projects in web development and software engineering.",
      "Actively practicing problem-solving on coding platforms.",
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
    name: "MacBookPro-redesign",
    description:
      "A visually engaging website that showcases a redesigned MacBook Pro with smooth animations and a realistic 3D model, offering users an interactive and immersive way to explore the product’s look and features.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "three.js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: macbookpro,
    source_code_link: "https://github.com/gitswastik08/macbook_landingpage",
    live_website_link: "https://macbookpro3d.netlify.app/",
  },
  {
    name: "Falverra Redesign",
    description:
      "A sleek and animated website redesign for Falverra, combining a clean layout with smooth transitions to deliver an engaging, modern browsing experience that highlights the brand’s visual identity and message.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "multi-page",
        color: "green-text-gradient",
      },
    ],
    image: falverra,
    source_code_link: "https://github.com/gitswastik08/falverra-redesign",
    live_website_link: "https://falverra-recode.netlify.app/",
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
    // github link ⬇️
    source_code_link: "https://github.com/",
    // project link ⬇️
    live_website_link: "https://app.netlify.com/teams/gitswastik08/projects",
  },
];

export { services, technologies, experiences, testimonials, projects };
