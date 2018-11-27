import React from 'react';

import '../styles/footer.css';

function Footer(props) {
  return (
    <footer role="contentinfo">
      <div className="row">
        <section className="col-4 box">
          <h1>Ryan Ureta</h1>
        </section>
        <section className="col-4 box">
          <ul>&nbsp;<span className="list-header">Contact Me</span>
            <li><i className="fas fa-mobile-alt fa-fw" aria-hidden="true"></i>&nbsp;619-384-6267</li>
            <li><a target="_blank" rel="noopener noreferrer" href="mailto:rcureta95@gmail.com"><i className="fas fa-envelope fa-fw" aria-hidden="true"></i>&nbsp;rcureta95@gmail.com</a></li>
          </ul>
        </section>
        <section className="col-4 box">
          <ul><span className="list-header">Misc.</span>
            <li><a target="_blank" rel="noopener noreferrer" href="https://rcureta.github.io/react-portfolio/files/ryan-ureta-resume.pdf"><i className="fas fa-file-alt fa-fw" aria-hidden="true"></i>&nbsp;Résumé</a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://github.com/rcureta"><i className="fab fa-github fa-fw" aria-hidden="true"></i>&nbsp;GitHub</a></li>
            <li><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/ryan-ureta"><i className="fab fa-linkedin fa-fw" aria-hidden="true"></i>&nbsp;LinkedIn</a></li>
          </ul>
        </section>
        <a id="footer-footer" href="#top"><i className="fas fa-arrow-circle-up fa-fw" aria-hidden="true"></i>&nbsp;Back to top</a>
      </div>
    </footer>
  );
}

export default Footer;
