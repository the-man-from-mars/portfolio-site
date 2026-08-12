import React from "react";
import { Link } from "react-router-dom";
import ProjectLanguages from "../../components/projectLanguages/ProjectLanguages";
import "./GithubRepoCard.css";
import { Fade } from "react-reveal";

export default function GithubRepoCard({ repo, theme }) {
  return (
    <Fade bottom duration={1000} distance="20px">
      <div
        key={repo.id}
        className="project-card-div"
        style={{ borderLeftColor: theme.imageHighlight }}
      >
        <div className="project-card-header">
          <h3 className="project-name" style={{ color: theme.text }}>
            {repo.name}
          </h3>
          <ProjectLanguages
            className="project-languages"
            logos={repo.languages}
          />
        </div>
        <p
          className="project-description"
          style={{ color: theme.secondaryText }}
        >
          {repo.description}
        </p>
        {repo.caseStudy && (
          <Link
            className="project-case-study-link"
            to={repo.caseStudy}
            style={{ color: theme.text, borderColor: theme.imageHighlight }}
          >
            Read the case study
          </Link>
        )}
      </div>
    </Fade>
  );
}
