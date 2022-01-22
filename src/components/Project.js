import React from 'react';

export default function Project({ projectList }) {
    return (
        <div id="workList" className="cardContent">
            {projectList.map((project) => {
                const projectImage = {
                    backgroundImage: "url(" + project.image + ")"
                }

                return (
                    <a href={project.link} style={projectImage} key={project.title} className="card" title={project.title} target="_blank" rel="noreferrer">
                    <object className="gitHub"><a href={project.gitHub} target="_blank" rel="noreferrer">{}</a></object>
                    <span className="cardTitle">{project.title}</span>
                    </a>
                );

            })}
        </div>
    );
};