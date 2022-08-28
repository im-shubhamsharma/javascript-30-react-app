import React from 'react';
import {useParams} from 'react-router-dom';
import JSDrumKit from '../challenges/JSDrumKit/JSDrumKit';

function ProjectDetails(props) {
    
    let {project} = useParams();
    console.log(project);

    return (
        <div>
           {project}
        </div>
    );
}

export default ProjectDetails;