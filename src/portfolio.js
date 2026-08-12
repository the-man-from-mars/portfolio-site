/* Change this file to get your personal Portfolio */

//SEO Related settings
const seo = {
  title: "Yahya Rahimi — Software Engineer | Backend, Full-Stack, Cloud",
  description:
    "Yahya Rahimi is a software engineer with 7+ years building production systems: distributed microservices and REST APIs in Java and Scala, AWS infrastructure, and CI/CD. Based in Oceanside, CA (San Diego County).",
  og: {
    title: "Yahya Rahimi — Software Engineer | Backend, Full-Stack, Cloud",
    type: "website",
    url: "https://yahyarahimi.dev/",
  },
};

// Per-route title and description. Read by SeoHeader at runtime and by
// scripts/prerender.mjs at build time, so the static HTML and the rendered
// app always agree.
const routeMeta = {
  "/": {
    title: seo.title,
    description: seo.description,
  },
  "/education": {
    title: "Education | Yahya Rahimi, Software Engineer",
    description:
      "Academic background of Yahya Rahimi: B.Sc. Computer Science with Honours from Universiti Sains Islam Malaysia, GPA 3.75.",
  },
  "/experience": {
    title: "Experience | Yahya Rahimi, Backend & Cloud Engineer",
    description:
      "7+ years across the software lifecycle: distributed microservices in Java and Scala, REST APIs, AWS and Terraform infrastructure, and end-to-end ownership of a multi-tenant SaaS platform.",
  },
  "/projects": {
    title: "Projects | Yahya Rahimi, Software Engineer",
    description:
      "Production systems and tools built by Yahya Rahimi, including Health Compass, a multi-tenant SaaS wellness assessment platform on Supabase and PostgreSQL.",
  },
  "/projects/health-compass": {
    title: "Health Compass Case Study | Yahya Rahimi",
    description:
      "How Health Compass is built: a multi-tenant SaaS assessment platform on Astro, Supabase and PostgreSQL row-level security, with serverless scoring, autosave, PDF export and email delivery.",
  },
  "/resume": {
    title: "Resume | Yahya Rahimi, Software Engineer",
    description:
      "Resume of Yahya Rahimi, software engineer with 7+ years in Java, Scala, microservices, AWS and CI/CD. Oceanside, CA (San Diego County) and US-remote.",
  },
  "/contact": {
    title: "Contact | Yahya Rahimi, Software Engineer",
    description:
      "Get in touch with Yahya Rahimi, a software engineer in Oceanside, CA (San Diego County) open to Backend, Full-Stack, and DevOps roles.",
  },
};
routeMeta["/home"] = routeMeta["/"];

//Home Page
const greeting = {
  title: "Yahya Rahimi",
  logo_name: "YahyaRahimi",
  nickname: "The man from Mars",
  subTitle:
    "Software Engineer with 7+ years building and operating production systems. I work primarily in Java and Scala, on distributed microservices, REST APIs, and the AWS and CI/CD infrastructure underneath them, and I'm comfortable owning a product the rest of the way to the browser. Recent work includes end-to-end ownership of a multi-tenant SaaS platform, from architecture through deployment.",
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
        "⚡ Designing distributed microservices and secure REST APIs in Java and Scala (Spring Boot, Akka HTTP, Play Framework)",
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
          skillName: "Spring Boot",
          fontAwesomeClassname: "simple-icons:springboot",
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
        "⚡ Owning products end to end, from backend APIs and data modeling through the interface users touch",
        "⚡ Building web experiences with React, Next.js, TypeScript, Astro and Tailwind CSS, including assessment flows, D3.js visualizations and PDF export",
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
          skillName: "D3.js",
          fontAwesomeClassname: "simple-icons:d3dotjs",
          style: {
            color: "#F9A03C",
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
        "⚡ Automating CI/CD and Infrastructure as Code (IaC) with Terraform, Jenkins and GitHub Actions, cutting deployment times by 50%",
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

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Backend, Full-Stack and Cloud Engineering",
  description:
    "7+ years across the full software lifecycle, starting in tier-3 enterprise support, moving into core backend engineering in Java and Scala, and now owning a production SaaS platform end to end.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        {
          title: "Software Engineer (role title: Tech Admin)",
          company: "International Ally Federation",
          company_url: "https://allyfederation.org/",
          logo_path: "iaf_logo.png",
          duration: "Aug 2024 - Present",
          location: "Remote",
          bullets: [
            "Owned end-to-end development of Health Compass, a production wellness assessment platform, covering architecture, backend APIs, frontend, data layer, and deployment.",
            "Built the application in TypeScript, Astro, and Tailwind: multi-section assessment flow, scoring engine, D3 results visualization, PDF export, and email delivery via serverless functions (Resend).",
            "Architected the platform toward multi-tenant SaaS on Supabase/PostgreSQL with row-level security, autosave APIs, and edge functions, designing tenant isolation from the ground up.",
            "Ran production operations: GitHub Actions CI/CD, GA4 analytics with cookie consent, and bilingual English/Farsi UX.",
            "Used AI-assisted development (Cursor, coding agents) as a core workflow, pairing agentic tooling with design docs and human review to ship production-grade code.",
          ],
          color: "#0E6BA8",
        },
        {
          title: "Software Engineer",
          company: "ServiceRocket Inc.",
          company_url: "https://www.servicerocket.com/",
          logo_path: "servicerocket_logo.png",
          duration: "Nov 2019 - Aug 2024",
          location: "Hybrid",
          bullets: [
            "Designed and implemented scalable backend services and distributed microservices in Scala (Akka HTTP / Play Framework) and Java, modernizing legacy workflows for B2B applications serving thousands of active users.",
            "Engineered secure, high-throughput REST APIs and data-processing layers, reducing request latency 30% for enterprise customer data-sync operations.",
            "Diagnosed production bottlenecks and security incidents using Instana and New Relic, systematically reducing error rates and sustaining 99.9% service availability.",
            "Built Infrastructure as Code pipelines with Terraform, Jenkins, and GitHub Actions, cutting deployment time 50%; provisioned and optimized AWS infrastructure (EC2, S3, RDS, IAM).",
            "Automated testing workflows in Python and Node.js, recovering approximately 20 engineering hours per month.",
            "Led code reviews and mentored junior engineers on testing strategy within an Agile team.",
          ],
          color: "#D7462D",
        },
        {
          title: "Application Support Engineer, Tier 3",
          company: "ServiceRocket Inc.",
          company_url: "https://www.servicerocket.com/",
          logo_path: "servicerocket_logo.png",
          duration: "Oct 2017 - Nov 2019",
          location: "On-site",
          bullets: [
            "Delivered tier-3 engineering support on complex Jira workflows, webhooks, and REST API integrations, holding a 90%+ satisfaction rating.",
            "Planned and executed large-scale Jira Server to Jira Cloud migrations, verifying 100% data integrity across thousands of production records with zero downtime.",
            "Built Jira integrations with GitHub and Azure DevOps as technical liaison to global enterprise clients.",
          ],
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

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "yahya_avatar.png",
    description:
      "I'm currently open to Backend, Full-Stack, and DevOps/Cloud engineering roles in San Diego and US-remote. My background is backend engineering in Java and Scala, distributed microservices and REST APIs, AWS and CI/CD infrastructure, and end-to-end ownership of a multi-tenant SaaS platform. If you would like to discuss a role or a project, reach out through any of the channels below. I usually reply within 24 hours.",
    location: "Oceanside, CA (San Diego County)",
  },
  // Used for the Person structured data and the prerendered pages.
  addressSection: {
    locality: "Oceanside",
    region: "California",
    country: "USA",
    display: "Oceanside, CA (San Diego County)",
  },
};

export {
  seo,
  routeMeta,
  greeting,
  socialMediaLinks,
  skills,
  degrees,
  experience,
  projectsHeader,
  contactPageData,
};
