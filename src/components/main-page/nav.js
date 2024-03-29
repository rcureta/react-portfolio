import React from 'react';

import '../styles/nav.css';

function Nav(props) {
  return (
    <nav role="navigation">
      <div className="nav-container">
        <h1>Ryan Ureta</h1>
        <label htmlFor="toggle">&#9776;</label>
        <input type="checkbox" id="toggle" />
        <section className="menu">
          <a target="_blank" rel="noopener noreferrer" href="https://github.com/rcureta"><i className="fab fa-github fa-fw" aria-hidden="true"></i>&nbsp;GitHub</a>
          <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ryan-ureta"><i className="fab fa-linkedin fa-fw" aria-hidden="true"></i>&nbsp;LinkedIn</a>
        </section>
      </div>
    </nav>
  );
}

export default Nav;
