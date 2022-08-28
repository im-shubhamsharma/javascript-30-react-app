import React from 'react';

function ProjectCard(props) {
    
    const {id, name} = props.project;
    
    return (
      <div className="project-card">
        <h2>#{id}</h2>
        <h2>{name}</h2>
      </div>
    );
}

export default ProjectCard;