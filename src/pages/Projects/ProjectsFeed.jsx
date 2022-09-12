import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import { Link } from "react-router-dom";
import {projectData} from "../../utils/constants"
import {ProjectContainer} from "./ProjectsFeed.styled"

function ProjectsFeed(props) {
  const projectElem = projectData.map((project) => (
    <Link className="link" key={project.id} to={project.link}>
      <ProjectCard project={project} />
    </Link>
  ));

  return <ProjectContainer>{projectElem}</ProjectContainer>;
}

export default ProjectsFeed;
