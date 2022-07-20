import React from 'react';

export default function Project(props) {
    return (
        <figure>
            <img 
                src={props.projectInfo.img}
                alt={props.projectInfo.alt}
            />
            <figcaption>
                <h3>{props.projectInfo.title}</h3>
                <p>{props.projectInfo.description}</p>
                <a href={props.projectInfo.deployment} >Deployment</a><a href={props.projectInfo.repository} >Repository</a>
            </figcaption>
        </figure>
    );
}