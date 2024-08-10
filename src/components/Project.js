
import React from 'react';
import './Project.css';

const Project = ({ title, description, link, imageUrl }) => {
  const projectStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div className="project" style={projectStyle}>
      <div className="project-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} target="_blank" rel="noopener noreferrer">View Project</a>
      </div>
    </div>
  );
};

export default Project;
