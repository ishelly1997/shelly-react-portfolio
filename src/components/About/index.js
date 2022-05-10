import React from 'react';
import avatar from '../../assets/author-img2.png';
import '../../assets/style.css'
function About() {

    return (
      <section>
          <h1>About</h1>
          {/* avatar image */}
          <img className='avatar' src={avatar} alt='Isabel'/>
          <h4>introduction</h4>
          <p>bio</p>
      </section>
      );
  }
  
  export default About;