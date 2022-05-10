import React from 'react';
import logo1 from '../../assets/passport-plane.png'
import logo2 from '../../assets/dinner-plate.png'
import '../../assets/style.css'

function Projects() {

  return (
    <div className='project-container'><div id='project-card'>
      <h1>Travel Planner Lite</h1>
      <img id="logo1"src={logo1} alt='logo'/>
      <p>Deployed App</p>
      <p>Github Repository</p>
    </div>
    <div id='project-card'>

        <h1>Restaurant Rater</h1>
        <img id="logo2" src={logo2} alt="logo"/>
        <p>Deployed App</p>
        <p>Github Repository</p>
      </div></div>
    );
}

export default Projects;