/**
 * Post-build prerender.
 *
 * The app is a client-rendered SPA, so anything that does not execute
 * JavaScript (AI assistants, link scrapers, older crawlers) sees an empty
 * page. This script writes a real HTML file for every route, with the page
 * content, route-specific metadata, and Person structured data baked in.
 *
 * React still boots normally and replaces the static markup for human
 * visitors, so the same HTML is served to everyone. The static copy is a
 * no-JavaScript fallback, not bot-specific content.
 *
 * Content is read from the same files the React app uses, so there is one
 * source of truth.
 */
import fs from "fs";
import path from "path";
import { pathToFileURL } from "url";

const BUILD = "build";
const SITE = "https://yahyarahimi.dev";

const COLORS = {
  body: "#FFF8E6",
  text: "#6a040f",
  secondary: "#964F56",
  border: "#dc2f0233",
};

/* ------------------------------------------------------------------ */
/* data loading                                                        */
/* ------------------------------------------------------------------ */

// portfolio.js uses ES module syntax, but package.json has no "type":
// "module", so Node treats a .js file as CommonJS and the import fails.
// Copying it to a .mjs file makes Node parse it as ESM. It has no imports
// of its own, so the copy is self-contained.
async function loadPortfolio() {
  const tmp = path.join(BUILD, "__portfolio.tmp.mjs");
  fs.writeFileSync(tmp, fs.readFileSync("src/portfolio.js", "utf8"));
  try {
    return await import(`${pathToFileURL(tmp).href}?v=${Date.now()}`);
  } finally {
    fs.unlinkSync(tmp);
  }
}

/* ------------------------------------------------------------------ */
/* helpers                                                             */
/* ------------------------------------------------------------------ */

const esc = (s) =>
  String(s ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");

const list = (items) =>
  `<ul>${items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`;

/* ------------------------------------------------------------------ */
/* page content                                                        */
/* ------------------------------------------------------------------ */

function homeBody({ greeting, skills, socialMediaLinks }) {
  const areas = skills.data
    .map(
      (s) =>
        `<section><h3>${esc(s.title)}</h3>${list(s.skills)}
         <p class="muted">${esc(
           s.softwareSkills.map((k) => k.skillName).join(", ")
         )}</p></section>`
    )
    .join("");
  const links = socialMediaLinks
    .map((m) => `<a href="${esc(m.link)}">${esc(m.name)}</a>`)
    .join(" · ");
  return `<h1>${esc(greeting.title)}</h1>
    <p class="role">Software Engineer</p>
    <p class="lede">${esc(greeting.subTitle)}</p>
    <p class="muted">${links}</p>
    <h2>What I Do</h2>${areas}`;
}

function educationBody({ degrees }) {
  return `<h1>Education</h1><p class="lede">Academic qualifications.</p>
    ${degrees.degrees
      .map(
        (d) => `<section><h3>${esc(d.title)}</h3>
        <p><strong>${esc(d.subtitle)}</strong> · ${esc(d.duration)}</p>
        ${list(d.descriptions)}</section>`
      )
      .join("")}`;
}

function experienceBody({ experience }) {
  const jobs = experience.sections
    .flatMap((s) => s.experiences)
    .map(
      (e) => `<section><h3>${esc(e.title)}</h3>
      <p><strong>${esc(e.company)}</strong> · ${esc(e.duration)}${
        e.location ? ` · ${esc(e.location)}` : ""
      }</p>
      ${
        Array.isArray(e.bullets)
          ? list(e.bullets)
          : `<p>${esc(e.description)}</p>`
      }</section>`
    )
    .join("");
  return `<h1>${esc(experience.title)}</h1>
    <p class="lede">${esc(experience.description)}</p>${jobs}`;
}

function projectsBody({ projectsHeader }, projects) {
  const cards = projects.data
    .map(
      (p) => `<section><h3>${esc(p.name)}</h3>
      <p>${esc(p.description)}</p>
      <p class="muted">${esc(
        p.languages.map((l) => l.name).join(", ")
      )}</p></section>`
    )
    .join("");
  return `<h1>${esc(projectsHeader.title)}</h1>
    <p class="lede">${esc(projectsHeader.description)}</p>${cards}`;
}

function contactBody({ contactPageData, socialMediaLinks }) {
  const c = contactPageData.contactSection;
  const links = socialMediaLinks
    .map((m) => `<li><a href="${esc(m.link)}">${esc(m.name)}</a></li>`)
    .join("");
  const a = contactPageData.addressSection;
  return `<h1>${esc(c.title)}</h1><p class="lede">${esc(c.description)}</p>
    <ul>${links}</ul>
    <p class="muted">${esc(a.display)}</p>
    <p><a href="/resume">See my resume</a></p>`;
}

function healthCompassBody() {
  return `<h1>Health Compass</h1>
    <p class="lede">A production wellness assessment platform for the
    International Ally Federation, built and operated end to end: architecture,
    backend APIs, frontend, data layer, and deployment.</p>
    <p class="muted">TypeScript, Astro, Tailwind CSS, Supabase / PostgreSQL,
    D3.js, Netlify serverless and edge functions, Resend, GitHub Actions.</p>
    <h2>Problem</h2>
    <p>The International Ally Federation needed a wellness assessment people
    could complete themselves, producing a structured, shareable result rather
    than a raw score, for a bilingual English and Farsi audience. The
    assessment is long enough that people do not finish it in one sitting, and
    it collects health-related answers, so partial progress has to survive
    interruption and every record has to stay scoped to the organization it
    belongs to.</p>
    <h2>Architecture</h2>
    <p>Static Astro pages carry the assessment flow. Progress is written
    continuously through edge functions into Supabase, where row-level security
    scopes every row to its tenant. On submit, a serverless function scores the
    assessment; results render through D3 and can leave the system as a PDF or
    an email sent through Resend.</p>
    <h2>Key technical decisions</h2>
    <ul>
      <li>Astro instead of a client-side SPA framework, so the flow ships
      mostly static HTML and loads fast on low-end phones. The tradeoff is that
      state does not survive navigation, which is why autosave is a server API
      rather than a client cache.</li>
      <li>Tenant isolation enforced by PostgreSQL row-level security rather
      than application code, so a missed filter in a new endpoint cannot leak
      another tenant's data.</li>
      <li>Autosave through edge functions, keeping the write path short so
      saving does not interrupt the person filling out the assessment.</li>
      <li>Scoring on the server and visualization on the client, so scoring
      rules are neither exposed nor modifiable in the browser.</li>
      <li>Email delivery from serverless functions rather than the browser,
      keeping the provider credential server-side.</li>
    </ul>
    <h2>Outcomes</h2>
    <p>Health Compass is in production. Shipped: a multi-section assessment
    flow with progress that survives leaving and returning, a server-side
    scoring engine with D3 results visualization, PDF export and email
    delivery, a multi-tenant data layer on Supabase and PostgreSQL with
    row-level security, bilingual English and Farsi UX, GA4 analytics with
    cookie consent, and GitHub Actions CI/CD.</p>
    <p><a href="https://allyfederation.org/en/health-compass">View the live
    platform</a></p>`;
}

// The bundler fingerprints the PDF, so resolve the real filename from the
// build output rather than hardcoding a hash that changes every release.
function resumePdfPath() {
  const dir = path.join(BUILD, "static", "media");
  const hit = fs
    .readdirSync(dir)
    .find((f) => /resume.*\.pdf$/i.test(f));
  if (!hit) throw new Error("Could not find the resume PDF in build/static/media");
  return `/static/media/${hit}`;
}

function resumeBody({ greeting }) {
  return `<h1>Resume</h1>
    <p class="lede">${esc(greeting.title)}, Software Engineer.</p>
    <p><a href="${esc(resumePdfPath())}">Download the PDF resume</a></p>
    <p class="muted">The full resume is also rendered on this page in the browser.</p>`;
}

/* ------------------------------------------------------------------ */
/* structured data                                                     */
/* ------------------------------------------------------------------ */

function personSchema({ greeting, socialMediaLinks, experience, contactPageData }) {
  const job = experience.sections.find((s) => s.work)?.experiences?.[0];
  const mail = socialMediaLinks.find((m) => m.link.startsWith("mailto:"));
  const a = contactPageData.addressSection;
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: greeting.title,
    jobTitle: "Software Engineer",
    url: `${SITE}/`,
    email: mail ? mail.link.replace("mailto:", "") : undefined,
    sameAs: socialMediaLinks
      .filter((m) => !m.link.startsWith("mailto:"))
      .map((m) => m.link),
    worksFor: job ? { "@type": "Organization", name: job.company } : undefined,
    address: {
      "@type": "PostalAddress",
      addressLocality: a.locality,
      addressRegion: a.region,
      addressCountry: a.country,
    },
    knowsAbout: [
      "Java",
      "Scala",
      "Spring Boot",
      "Akka HTTP",
      "Play Framework",
      "Microservices",
      "REST API design",
      "Distributed systems",
      "TypeScript",
      "React",
      "Node.js",
      "AWS",
      "Terraform",
      "Infrastructure as Code",
      "CI/CD",
      "PostgreSQL",
    ],
  };
}

/* ------------------------------------------------------------------ */
/* html assembly                                                       */
/* ------------------------------------------------------------------ */

const FALLBACK_CSS = `
<style id="prerender-style">
#prerender-content{max-width:820px;margin:0 auto;padding:2.5rem 1.25rem;
font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif;
color:${COLORS.text};background:${COLORS.body};line-height:1.6}
#prerender-content h1{font-size:2rem;margin:0 0 .25rem}
#prerender-content h2{font-size:1.35rem;margin:2rem 0 .5rem;
border-bottom:1px solid ${COLORS.border};padding-bottom:.3rem}
#prerender-content h3{font-size:1.1rem;margin:1.5rem 0 .3rem}
#prerender-content .role{font-size:1.1rem;color:${COLORS.secondary};margin:0 0 1rem}
#prerender-content .lede{font-size:1.05rem}
#prerender-content .muted{color:${COLORS.secondary};font-size:.95rem}
#prerender-content nav a{margin-right:1rem}
#prerender-content a{color:${COLORS.text}}
</style>`;

function shell(inner, nav) {
  return `<div id="prerender-content"><nav>${nav}</nav>${inner}</div>`;
}

const NAV = [
  ["/", "Home"],
  ["/education", "Education"],
  ["/experience", "Experience"],
  ["/projects", "Projects"],
  ["/resume", "Resume"],
  ["/contact", "Contact"],
];

function buildPage(template, { route, title, description, body, schema }) {
  let html = template;
  const url = `${SITE}${route === "/" ? "/" : route}`;

  // route-specific head tags
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${esc(title)}</title>`);
  html = html.replace(
    /<meta name="description" content="[^"]*"\s*\/?>/,
    `<meta name="description" content="${esc(description)}"/>`
  );
  html = html.replace(
    /<meta property="og:title" content="[^"]*"\s*\/?>/,
    `<meta property="og:title" content="${esc(title)}"/>`
  );
  html = html.replace(
    /<meta property="og:description" content="[^"]*"\s*\/?>/,
    `<meta property="og:description" content="${esc(description)}"/>`
  );
  html = html.replace(
    /<meta property="og:url" content="[^"]*"\s*\/?>/,
    `<meta property="og:url" content="${esc(url)}"/>`
  );
  html = html.replace(
    /<link rel="canonical" href="[^"]*"\s*\/?>/,
    `<link rel="canonical" href="${esc(url)}"/>`
  );

  // structured data + fallback styles
  const ld = `<script type="application/ld+json">${JSON.stringify(
    schema
  )}</script>`;
  html = html.replace("</head>", `${FALLBACK_CSS}${ld}</head>`);

  // static content inside the React root; React clears it on mount
  const nav = NAV.filter(([h]) => h !== route)
    .map(([h, l]) => `<a href="${h}">${l}</a>`)
    .join("");
  html = html.replace(
    /<div id="root">\s*<\/div>/,
    `<div id="root">${shell(body, nav)}</div>`
  );

  return html;
}

/* ------------------------------------------------------------------ */
/* main                                                                */
/* ------------------------------------------------------------------ */

async function main() {
  const p = await loadPortfolio();
  const projects = JSON.parse(
    fs.readFileSync("src/shared/opensource/projects.json", "utf8")
  );
  const templatePath = path.join(BUILD, "index.html");
  const template = fs.readFileSync(templatePath, "utf8");

  if (!/<div id="root">\s*<\/div>/.test(template)) {
    throw new Error("Could not find an empty #root div in build/index.html");
  }

  const schema = personSchema(p);

  // Titles and descriptions come from routeMeta so the static HTML matches
  // what SeoHeader sets once React mounts.
  const routes = [
    { route: "/", file: "index.html", body: homeBody(p) },
    { route: "/education", file: "education.html", body: educationBody(p) },
    { route: "/experience", file: "experience.html", body: experienceBody(p) },
    {
      route: "/projects",
      file: "projects.html",
      body: projectsBody(p, projects),
    },
    {
      route: "/projects/health-compass",
      file: "projects/health-compass.html",
      body: healthCompassBody(),
    },
    { route: "/resume", file: "resume.html", body: resumeBody(p) },
    { route: "/contact", file: "contact.html", body: contactBody(p) },
  ];

  for (const r of routes) {
    const meta = p.routeMeta[r.route];
    if (!meta) throw new Error(`No routeMeta entry for ${r.route}`);
    const html = buildPage(template, {
      ...r,
      title: meta.title,
      description: meta.description,
      schema,
    });
    const out = path.join(BUILD, r.file);
    fs.mkdirSync(path.dirname(out), { recursive: true });
    fs.writeFileSync(out, html);
    console.log(`  prerendered ${r.route.padEnd(12)} -> ${r.file}`);
  }

  // /home renders the same page as /
  fs.copyFileSync(
    path.join(BUILD, "index.html"),
    path.join(BUILD, "home.html")
  );
  console.log("  prerendered /home        -> home.html");
  console.log(`Prerendered ${routes.length + 1} routes.`);
}

main().catch((e) => {
  console.error("Prerender failed:", e.message);
  process.exit(1);
});
