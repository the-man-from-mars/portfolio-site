import React from "react";
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
      </div>
    </Fade>
  );
}
