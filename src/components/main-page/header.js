import React from 'react';

import '../styles/header.css';

function Header(props) {
  return (
    <header id="top">
      <div className="row">
        <section className="col-12 box">
          <h1>Hi, I'm<span id="catcher">Ryan Ureta,</span>a San Diego based developer with a passion to discover.</h1>
        </section>
        <a id="header-footer" href="#main"><i className="fas fa-arrow-circle-down fa-fw" aria-hidden="true"></i>&nbsp;Learn More</a>
      </div>
    </header>
  );
}

export default Header;
