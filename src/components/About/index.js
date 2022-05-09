import React from 'react';

function About() {

    return (
      <section>
          <h1>About</h1>
          {/* avatar image */}
          <img className='avatar' src={process.env.PUBLIC_URL + '../assets/author-img.png'} alt='Isabel'/>
          <p>short biography</p>
          <p>LinkedIn</p>
      </section>
      );
  }
  
  export default About;