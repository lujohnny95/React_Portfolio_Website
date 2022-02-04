import React from 'react';

const Technologies = () => {
  return (
    <section id="tech">
        <div className="section-divider">
            <h2 className='section-title'>Technologies</h2>
            <div className='tech-container'>
                <div className="tech-card">
                    <h3>Front-End</h3>
                    <p>Experience with: <br/> React.js (JavaScript, HTML, CSS)</p>
                </div>
                <div className="tech-card">
                    <h3>Back-End</h3>
                    <p>Experience with: <br/> Node.js, Express.js, MongoDB, MySQL, REST_API, Authentication</p>
                </div>
                <div className="tech-card">
                    <h3>Python</h3>
                    <p>Experience with: <br/> Tkinter, Turtle, Pygame, Web-scraping (BS4, Selenium), Pandas</p>
                </div>
            </div>
        </div>
    </section>
  )
};

export default Technologies;
