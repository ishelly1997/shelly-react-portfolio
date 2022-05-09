import React, { useState } from 'react';

import { capitalizeFirstLetter } from "../../utils/helpers";

function Nav() {
const [tabs] = useState([
  {
    name: 'about', description: 'get to know me'},
  { name: 'projects', description: 'check out my work' },
  { name: 'resume', description: 'my educational and work experiences' },
  { name: 'contact', description: 'fill out a contact form' },
]);
const [currentTab, setCurrentTab] = useState(tabs[0]);


  return (

  <nav >
      <li className="about-me">
        <a href="#about">About Me</a>
      </li>
      <li>
        <a href="#Projects">Projects</a>
        </li>
        <li>
          <a href="#Resume">Resume</a>
        </li>
  </nav>

  );
}

export default Nav;