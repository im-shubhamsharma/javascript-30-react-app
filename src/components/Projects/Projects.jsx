import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import { Link } from "react-router-dom";
import projectData from "../../api/data";

function Projects(props) {
  const projectElem = projectData.map((project) => (
    <Link className="link" key={project.id} to={project.link}>
      <ProjectCard project={project} />
    </Link>
  ));

  return <div className="projects-container">{projectElem}</div>;
}

export default Projects;
