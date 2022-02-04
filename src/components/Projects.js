import React from 'react';
import { projects } from '../constants/constants';

const Projects = () => {
  return (
      <section>
          <div className='section-divider'>
            <h2>Projects</h2>
            <div className='grid-container'>
                {projects.map(({ id, image, title, description, tags, source, visit }) => (
                    <div className='project-card' key={id}>
                        <img src={image} alt="project-img" />
                        <h3 className='title-content'>{title}</h3>
                        <p>{description}</p>
                        <div>
                            <h4>Stack/Technologies</h4>
                            <ul className='tag-list'>
                                {tags.map((tag, i) => {
                                    <li className='tag' key={i}>{tag}</li>
                                })}
                            </ul>
                        </div>
                        <div className='utility-list'>
                                <a href={visit}>Code</a>
                                <a href={source}>Source</a>
                        </div>
                    </div>
                ))}
            </div>
          </div>
      </section>
  )
};

export default Projects;
