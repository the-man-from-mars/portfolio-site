import React, { Component } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import GithubRepoCard from "../../components/githubRepoCard/GithubRepoCard";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "react-reveal";
import { projectsHeader } from "../../portfolio.js";
import ProjectsData from "../../shared/opensource/projects.json";
import "./Projects.css";
import ProjectsImg from "./ProjectsImg";

class Projects extends Component {
  render() {
    const theme = this.props.theme;
    return (
      <div className="projects-main">
        <Header theme={theme} />
        <div className="basic-projects">
          <Fade bottom duration={2000} distance="40px">
            <div className="projects-heading-div">
              <div className="projects-heading-img-div">
                {/* <img
											src={require(`../../assets/images/${projectsHeader["avatar_image_path"]}`)}
											alt=""
										/> */}
                <ProjectsImg theme={theme} />
              </div>
              <div className="projects-heading-text-div">
                <h1
                  className="projects-heading-text"
                  style={{ color: theme.text }}
                >
                  {projectsHeader.title}
                </h1>
                <p
                  className="projects-header-detail-text subTitle"
                  style={{ color: theme.secondaryText }}
                >
                  {projectsHeader["description"]}
                </p>
              </div>
            </div>
          </Fade>
        </div>
        <div className="repo-cards-div-main">
          {ProjectsData.data
            .filter((repo) => !repo.earlier)
            .map((repo) => (
              <GithubRepoCard key={repo.id} repo={repo} theme={theme} />
            ))}
        </div>
        {ProjectsData.data.some((repo) => repo.earlier) && (
          <div className="earlier-work-div">
            <h2 className="earlier-work-heading" style={{ color: theme.text }}>
              Earlier work
            </h2>
            <p
              className="earlier-work-note subTitle"
              style={{ color: theme.secondaryText }}
            >
              Academic and early-career projects, kept for context.
            </p>
            <div className="repo-cards-div-main">
              {ProjectsData.data
                .filter((repo) => repo.earlier)
                .map((repo) => (
                  <GithubRepoCard key={repo.id} repo={repo} theme={theme} />
                ))}
            </div>
          </div>
        )}
        <Footer theme={this.props.theme} onToggle={this.props.onToggle} />
        <TopButton theme={this.props.theme} />
      </div>
    );
  }
}

export default Projects;
