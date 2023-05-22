import React from 'react';

import '../styles/about.css';

function About(props) {
  return (
    <article className="about">
      <div className="row">
        <section className="col-12 box">
          <h1 className="section-header"><i className="fas fa-user fa-fw" aria-hidden="true"></i>&nbsp;About Me</h1>
          <img className="profile-pic" src={require('../assets/profile-pic.png')} alt="Profile." />
          <p>After my first class teaching me elementary Java, I knew coding was a different kind of experience. The rigor of STEM, the creativity and ingenuity of the arts, and a pervasive culture fundamental to the craft unlike any other discipline I came across.</p>
          <p>I'm setting out to create to revel in the joy of creating. Whether to work on the cutting edge or to immerse myself in something new, doing the work is its own reward.</p>
        </section>
      </div>
      <div className="row">
        <section className="col-6 box">
          <ul><i className="fas fa-graduation-cap fa-fw" aria-hidden="true"></i>&nbsp;<span className="list-header">School</span>
            <li><span className="list-title">Thinkful,</span>Web Development Intensive, Summer-Fall 2018</li>
            <li><span className="list-title">San Diego Mesa College,</span>Liberal Arts and Sciences: Mathematics and Pre-Engineering-, June 2018</li>
          </ul>
        </section>
        <section className="col-6 box">
          <ul><i className="fas fa-briefcase fa-fw" aria-hidden="true"></i>&nbsp;<span className="list-header">Work</span>
            <li><span className="list-title">Full Stack Developer,</span>Thinkful - Academic Projects, July 2018 - Dec 2018</li>
            <li><span className="list-title">Full Stack Developer,</span>Innovision Marketing Group, July 2020 - Dec 2022</li>
        </ul>
        </section>
      </div>
    </article>
  );
}

export default About;
