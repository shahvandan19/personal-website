import React from 'react';
import './experience.css';
import workExperience from '../../data/workExperiences.json';

const Experience = () => {
  return (
    <div id='experience' className="experience">
      <div className="experience-title">
        <h1>Experience</h1>
        <h2>Here's where I've worked</h2>
      </div>
      <div className="experience-content">
        {workExperience.experiences.map((exp) => (
          <div key={exp.id} className="experience-item">
            <h2>{exp.title}</h2>
            <h3>{exp.company}</h3>
            <h4>{exp.period}</h4>
            <p>{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;