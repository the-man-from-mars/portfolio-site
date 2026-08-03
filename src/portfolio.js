/* Change this file to get your personal Portfolio */

// Website related settings
const settings = {
  isSplash: false, // Change this to true to enable the splash screen.
};

//SEO Related settings
const seo = {
  title: "Yahya Rahimi's Portfolio",
  description:
    "Portfolio of Yahya Rahimi, a software engineer specializing in scalable backend systems, microservices, and full-stack web development.",
  og: {
    title: "Yahya Rahimi Portfolio",
    type: "website",
    url: "https://yahya-rahimi.netlify.app/",
  },
};

//Home Page
const greeting = {
  title: "Yahya Rahimi",
  logo_name: "YahyaRahimi",
  nickname: "The man from Mars",
  subTitle:
    "Software Engineer with 5+ years of experience building scalable cloud systems and high-performance microservices in Java and Scala. I enjoy working across the full stack, from multi-tenant SaaS backends to modern web frontends, and shipping software that holds up in production.",
  resumeLink: "/resume",
  portfolio_repository: "https://github.com/the-man-from-mars/portfolio",
  githubProfile: "https://github.com/the-man-from-mars",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/the-man-from-mars",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/themanfrommars/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:gyr.rahimi@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
];

const skills = {
  data: [
    {
      title: "Backend & Distributed Systems",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Designing scalable microservices and secure RESTful APIs in Java and Scala (Akka HTTP, Play Framework)",
        "⚡ Performance tuning enterprise data-sync operations, cutting request latency by 30%",
        "⚡ Modeling and migrating data across PostgreSQL, MySQL, MongoDB and DynamoDB with zero data loss",
      ],
      softwareSkills: [
        {
          skillName: "Java",
          fontAwesomeClassname: "logos-java",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Scala",
          fontAwesomeClassname: "simple-icons:scala",
          style: {
            color: "#DC322F",
          },
        },
        {
          skillName: "Spring",
          fontAwesomeClassname: "simple-icons:spring",
          style: {
            color: "#6DB33F",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MySQL",
          fontAwesomeClassname: "logos-mysql",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive web experiences with React, Next.js and TypeScript",
        "⚡ Shipping complete products with Astro and Tailwind CSS, including assessment flows, D3 visualizations, PDF export and transactional email",
        "⚡ Creating application backends with Node.js and serverless functions (Netlify, Supabase)",
      ],
      softwareSkills: [
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "TypeScript",
          fontAwesomeClassname: "simple-icons:typescript",
          style: {
            color: "#3178C6",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NextJS",
          fontAwesomeClassname: "simple-icons:nextdotjs",
          style: {
            color: "#000000",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "Astro",
          fontAwesomeClassname: "simple-icons:astro",
          style: {
            color: "#FF5D01",
          },
        },
        {
          skillName: "TailwindCSS",
          fontAwesomeClassname: "simple-icons:tailwindcss",
          style: {
            color: "#06B6D4",
          },
        },
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
      ],
    },
    {
      title: "Cloud Infra & DevOps",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Provisioning and optimizing AWS infrastructure (EC2, S3, RDS, IAM, Lambda)",
        "⚡ Automating CI/CD and infrastructure as code with Terraform, Jenkins and GitHub Actions, cutting deployment times by 50%",
        "⚡ Keeping production observable and reliable with Instana, New Relic and CloudWatch (99.9% availability)",
      ],
      softwareSkills: [
        {
          skillName: "AWS",
          fontAwesomeClassname: "simple-icons:amazonaws",
          style: {
            color: "#FF9900",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "simple-icons:docker",
          style: {
            color: "#1488C6",
          },
        },
        {
          skillName: "Terraform",
          fontAwesomeClassname: "simple-icons:terraform",
          style: {
            color: "#7B42BC",
          },
        },
        {
          skillName: "Jenkins",
          fontAwesomeClassname: "simple-icons:jenkins",
          style: {
            color: "#D24939",
          },
        },
        {
          skillName: "GitHub Actions",
          fontAwesomeClassname: "simple-icons:githubactions",
          style: {
            color: "#2088FF",
          },
        },
        {
          skillName: "Netlify",
          fontAwesomeClassname: "simple-icons:netlify",
          style: {
            color: "#00C7B7",
          },
        },
        {
          skillName: "Supabase",
          fontAwesomeClassname: "simple-icons:supabase",
          style: {
            color: "#3FCF8E",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [],
};

const degrees = {
  degrees: [
    {
      title: "Universiti Sains Islam Malaysia",
      subtitle: "B.CS (Honours) in Information Security & Assurance",
      logo_path: "usim_logo.png",
      alt_name: "USIM",
      duration: "2013 - 2017",
      descriptions: [
        "⚡ Graduated with Honours and a 3.75 GPA.",
        "⚡ Majored in Information Security and Assurance, with strong foundations in software engineering, networks, and security.",
        "⚡ Built full-stack projects including a university resource management system with PHP, Bootstrap, and MySQL.",
      ],
      website_link: "https://www.usim.edu.my/",
    },
    {
      title: "Bakhtar Institute of Higher Education",
      subtitle: "Foundation in Information & Communication Technology",
      logo_path: "bakhtar_logo.png",
      alt_name: "Bakhtar Institute of Higher Education",
      duration: "2012",
      descriptions: [
        "⚡ Completed foundation studies in Information & Communication Technology.",
        "⚡ Covered programming and computer systems fundamentals before starting my computer science degree.",
      ],
      website_link: "https://bakhtar.edu.af/",
    },
  ],
};

const certifications = {
  certifications: [],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work and Nonprofit Leadership",
  description:
    "I have spent 8+ years across the full software lifecycle, starting in tier-3 enterprise support, moving into core backend engineering, and now leading product development for a nonprofit. I care about systems that stay fast, observable, and reliable in production.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Tech Admin",
          company: "International Ally Federation",
          company_url: "https://allyfederation.org/",
          logo_path: "iaf_logo.png",
          duration: "Aug 2024 - Present",
          location: "Oceanside, CA, USA",
          description:
            "Leading development of the IAF website and Health Compass, a production wellness assessment platform, across UI, backend APIs, data persistence, and deployment. Built full-stack features in TypeScript, Astro, and Tailwind CSS, including a multi-section assessment flow, scoring engine, D3 results visualization, PDF export, and email-based results sharing. Currently extending the platform into a multi-tenant SaaS product with Supabase/PostgreSQL, row-level security, and Netlify Edge Functions. Also responsible for platform operations: GitHub Actions CI/CD, GA4 analytics, bilingual English/Farsi UX, and Microsoft 365 administration.",
          color: "#0E6BA8",
        },
        {
          title: "Software Engineer",
          company: "ServiceRocket Inc.",
          company_url: "https://www.servicerocket.com/",
          logo_path: "servicerocket_logo.png",
          duration: "Nov 2019 - Aug 2024",
          location: "",
          description:
            "Designed and implemented scalable backend architectures and microservices in Scala (Akka HTTP, Play Framework) and Java for B2B applications serving thousands of active users. Engineered secure, high-performance REST APIs that cut request latency by 30%, and automated infrastructure as code with Terraform, Jenkins, and GitHub Actions, reducing deployment times by half. Diagnosed production bottlenecks with Instana and New Relic to maintain 99.9% availability, optimized AWS infrastructure (EC2, S3, RDS, IAM), and mentored junior engineers on testing with ScalaTest and Jest.",
          color: "#D7462D",
        },
        {
          title: "Application Support Engineer",
          company: "ServiceRocket Inc.",
          company_url: "https://www.servicerocket.com/",
          logo_path: "servicerocket_logo.png",
          duration: "Oct 2017 - Nov 2019",
          location: "",
          description:
            "Provided tier-3 technical support for enterprise clients configuring complex Jira workflows, webhooks, and REST API integrations, maintaining a customer satisfaction rating above 90%. Planned and executed large-scale data migrations from Jira Server to Jira Cloud with 100% data integrity and zero business downtime, and built integrations connecting Jira to GitHub and Azure DevOps.",
          color: "#FC9D03",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "A selection of products I have built end to end, from nonprofit platforms to SaaS features and developer tools. My favorite work combines solid backend engineering with clean, accessible UI.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "yahya_avatar.png",
    description:
      "I'm currently open to software engineering roles and collaborations. My background covers backend development with Java and Scala, full-stack web development with React and Next.js, and cloud infrastructure on AWS. If you would like to discuss a role or a project, reach out through any of the channels below. I usually reply within 24 hours.",
  },
  addressSection: {
    title: "Address",
    subtitle: "Oceanside, California, USA",
    locality: "Oceanside",
    country: "USA",
    region: "California",
    postalCode: "",
    streetAddress: "",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://www.google.com/maps/place/Oceanside,+CA",
  },
  phoneSection: {
    title: "",
    subtitle: "",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
