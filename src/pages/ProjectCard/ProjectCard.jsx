import React from 'react';
import {CardContainer} from './ProjectCard.styled'

function ProjectCard(props) {
    
    const {id, name} = props.project;
    
    return (
      <CardContainer>
        <h2>#{id}</h2>
        <h2>{name}</h2>
      </CardContainer>
    );
}

export default ProjectCard;