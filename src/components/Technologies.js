import React from 'react';

const Technologies = () => {
  return (
    <section id="tech">
        <div className="section-divider">
            <h2 className='section-title'>Technologies</h2>
            <h5>I have worked with a range of technologies in the web development eco-sphere, from the front-end to the back-end, in addition to having knowledge of working with Python.</h5>
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
