import React from 'react';
import logo1 from '../../assets/passport-plane.png'
import logo2 from '../../assets/dinner-plate.png'
import logo3 from '../../assets/Bootcamp.gif'
import '../../assets/style.css'

function Projects() {

  return (
    <div className='project-container'><div id='project-card'>
      <h1>Travel Planner Lite</h1>
      <img id="logo1"src={logo1} alt='logo'/>
      <div/>
        <a href='https://ishelly1997.github.io/Travel-Planner-Lite/'>Deployed App</a>
        <div/>
        <a href='https://github.com/ishelly1997/Travel-Planner-Lite'>Github Repository</a>
    </div>
    <div id='project-card'>

    <h1>Bootcamp Social</h1>
    <img id="logo3" src={logo3} alt="logo"/>
    <div/>
    <a href='https://bootcamp-social.herokuapp.com/'>Deployed App</a>
    <div/>
    <a href='https://github.com/ishelly1997/bootcamp-social'>Github Repository</a>
    </div>    
    <div id='project-card'>

        <h1>Restaurant Rater</h1>
        <img id="logo2" src={logo2} alt="logo"/>
        <div/>
        <a href='https://hidden-anchorage-87241.herokuapp.com/'>Deployed App</a>
        <div/>
        <a href='https://github.com/cathmcneel/restaurant-rater'>Github Repository</a>
      </div></div>
      
    );
}

export default Projects;