import React from 'react';
import About from './About';
import Projects from './Projects';
import Technologies from './Technologies';

const Home = () => {
  return (
    <>
        <section id="Home">
            <div className='left-section'>
                <h1 className='home-title'>Welcome To My Personal Portfolio!</h1>
                <br />
                <h4 className='home-text'>Junior Web developer with practical knowledge on building MERN-stack applications.</h4>
                <button>Learn More!</button>
            </div>
        </section>
        <About />
        <Technologies />
        <Projects />
    </>
  )
};

export default Home;
