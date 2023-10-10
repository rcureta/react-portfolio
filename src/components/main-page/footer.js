import React from 'react';

import '../styles/footer.css';

function Footer(props) {
  return (
    <footer role="contentinfo">
      <div className="row">
        <section className="col-6 box">
          <ul>&nbsp;<span className="list-header">Contact Me</span>
            <li><i className="fas fa-mobile-alt fa-fw" aria-hidden="true"></i>&nbsp;619-384-6267</li>
            <li><a target="_blank" rel="noopener noreferrer" href="mailto:rcureta95@gmail.com"><i className="fas fa-envelope fa-fw" aria-hidden="true"></i>&nbsp;rcureta95@gmail.com</a></li>
          </ul>
        </section>
        <section className="col-6 box">
          <ul><span className="list-header">Misc.</span>
            <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/rcureta"><i className="fab fa-github fa-fw" aria-hidden="true"></i>&nbsp;GitHub</a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ryan-ureta"><i className="fab fa-linkedin fa-fw" aria-hidden="true"></i>&nbsp;LinkedIn</a></li>
          </ul>
        </section>
      </div>
    </footer>
  );
}

export default Footer;
