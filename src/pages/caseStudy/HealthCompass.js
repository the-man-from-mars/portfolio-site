import React, { Component } from "react";
import { Link } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import "./HealthCompass.css";
import ArchitectureDiagram from "./ArchitectureDiagram";

const decisions = [
  {
    title: "Astro instead of a client-side SPA framework",
    body:
      "The assessment is content-heavy and mostly static between interactions. Astro renders pages to HTML at build time and ships JavaScript only for the parts that need it, so the flow loads fast on the low-end phones a community health program actually runs on.",
    tradeoff:
      "Tradeoff: Astro defaults to full page loads between routes, so in-memory client state does not survive navigation. That pushed assessment progress onto the server rather than into a client store, which is the reason autosave exists as an API rather than a local cache.",
  },
  {
    title:
      "Tenant isolation in PostgreSQL row-level security, not application code",
    body:
      "Every tenant-scoped table carries a tenant identifier and a row-level security policy. Authorization is evaluated by Postgres on each query rather than by a filter in application code, so isolation does not depend on every future query remembering to scope itself.",
    tradeoff:
      "Tradeoff: policies are harder to debug than an application WHERE clause, and they have to be written and tested per table. The upside is that a missed filter in a new endpoint cannot leak another tenant's data, which is the failure mode that matters most for health information.",
  },
  {
    title: "Autosave through edge functions",
    body:
      "Assessment progress is written continuously through edge functions rather than only on submit. Running at the edge keeps the write path short, so saving does not interrupt the person filling out the assessment.",
    tradeoff:
      "Tradeoff: edge runtimes are more constrained than a full Node server, so the autosave path has to stay small and dependency-free. Heavier work stays in regular serverless functions.",
  },
  {
    title: "Scoring on the server, visualization on the client",
    body:
      "The scoring engine runs server-side so results are consistent and the logic is not exposed or modifiable in the browser. D3 then renders the computed result client-side, which keeps the visualization interactive without shipping the scoring rules.",
    tradeoff:
      "Tradeoff: an extra network round trip between submit and results, in exchange for scoring that cannot be tampered with and can be changed without redeploying the client.",
  },
  {
    title: "Email delivery from serverless functions rather than the browser",
    body:
      "Results are emailed through a Netlify serverless function calling Resend. The API credential stays server-side and delivery can be retried and logged independently of the user's session.",
    tradeoff:
      "Tradeoff: one more deployable surface to monitor, versus the alternative of putting a mail provider credential somewhere the client can reach it, which is not an acceptable option.",
  },
];

class HealthCompass extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="case-study-main">
        <Header theme={theme} />
        <div className="case-study-body">
          <Fade bottom duration={800} distance="30px">
            <div className="case-study-header">
              <p
                className="case-study-eyebrow"
                style={{ color: theme.secondaryText }}
              >
                Case study
              </p>
              <h1 className="case-study-title" style={{ color: theme.text }}>
                Health Compass
              </h1>
              <p
                className="case-study-standfirst"
                style={{ color: theme.secondaryText }}
              >
                A production wellness assessment platform for the International
                Ally Federation, built and operated end to end: architecture,
                backend APIs, frontend, data layer, and deployment.
              </p>
              <ul
                className="case-study-stack"
                style={{ color: theme.secondaryText }}
              >
                <li>TypeScript</li>
                <li>Astro</li>
                <li>Tailwind CSS</li>
                <li>Supabase / PostgreSQL</li>
                <li>D3.js</li>
                <li>Netlify serverless &amp; edge functions</li>
                <li>Resend</li>
                <li>GitHub Actions</li>
              </ul>
            </div>
          </Fade>

          <section className="case-study-section">
            <h2 style={{ color: theme.text }}>Problem</h2>
            <p style={{ color: theme.secondaryText }}>
              The International Ally Federation is a nonprofit working on
              wellbeing and social impact. It needed a wellness assessment
              people could complete themselves, that produced a structured,
              shareable result rather than a raw score, and that worked for a
              bilingual English and Farsi audience.
            </p>
            <p style={{ color: theme.secondaryText }}>
              The assessment is long enough that people do not finish it in one
              sitting, and it collects health-related answers, so partial
              progress has to survive interruption and every record has to stay
              scoped to the organization it belongs to. Those two constraints,
              durable partial state and hard data isolation, drove most of the
              architecture below.
            </p>
          </section>

          <section className="case-study-section">
            <h2 style={{ color: theme.text }}>Architecture</h2>
            <p style={{ color: theme.secondaryText }}>
              Static Astro pages carry the assessment flow. Progress is written
              continuously through edge functions into Supabase, where row-level
              security scopes every row to its tenant. On submit, a serverless
              function scores the assessment; results render through D3 and can
              leave the system as a PDF or an email.
            </p>
            <ArchitectureDiagram theme={theme} />
          </section>

          <section className="case-study-section">
            <h2 style={{ color: theme.text }}>Key technical decisions</h2>
            {decisions.map((d) => (
              <div className="decision" key={d.title}>
                <h3 style={{ color: theme.text }}>{d.title}</h3>
                <p style={{ color: theme.secondaryText }}>{d.body}</p>
                <p
                  className="decision-tradeoff"
                  style={{ color: theme.secondaryText }}
                >
                  {d.tradeoff}
                </p>
              </div>
            ))}
          </section>

          <section className="case-study-section">
            <h2 style={{ color: theme.text }}>Outcomes</h2>
            <p style={{ color: theme.secondaryText }}>
              Health Compass is in production. What shipped:
            </p>
            <ul
              className="case-study-list"
              style={{ color: theme.secondaryText }}
            >
              <li>
                A multi-section assessment flow with progress that survives
                leaving and returning.
              </li>
              <li>
                A server-side scoring engine and D3 results visualization.
              </li>
              <li>
                PDF export and email delivery of results through serverless
                functions.
              </li>
              <li>
                A multi-tenant data layer on Supabase and PostgreSQL with
                row-level security and tenant isolation designed in from the
                start.
              </li>
              <li>
                Bilingual English and Farsi UX, GA4 analytics with cookie
                consent, and GitHub Actions CI/CD.
              </li>
            </ul>
            <p style={{ color: theme.secondaryText }}>
              <a
                href="https://allyfederation.org/en/health-compass"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: theme.text }}
              >
                View the live platform
              </a>
            </p>
          </section>

          <div className="case-study-back">
            <Link to="/projects" style={{ color: theme.text }}>
              Back to projects
            </Link>
          </div>
        </div>
        <Footer theme={theme} />
        <TopButton theme={theme} />
      </div>
    );
  }
}

export default HealthCompass;
