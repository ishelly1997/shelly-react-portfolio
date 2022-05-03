import React from 'react';


function Nav() {

  return (
    <>
  <h2>
    <a href="/">
      <span role="img" aria-label="title"></span>Portfolio
    </a>
  </h2>
  <nav>
    <ul className="flex-row">
      <li className="mx-2">
        <a href="#about">
          About me
        </a>
      </li>
      <li>
        <span>Contact</span>
      </li>
    </ul>
  </nav>
  </>
  );
}

export default Nav;