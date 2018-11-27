import React from 'react';

import '../styles/projects.css';

function Projects(props) {
  return (
    <article className="projects">
      <div className="row">
        <section className="col-12 box">
          <h1 className="section-header">Projects</h1>
        </section>
      </div>
      <div className="row">
        <section className="col-6 box">
          <h2>GoSeeThis</h2>
          <p>Tired of the vitriol so commonplace with movie review websites?Look no further, as just a click away is a community designed around sharing profound and sentimental experiences from films that you should really go see.</p>
          <hr />
          <p>Tech Stack: HTML5, CSS3, JavaScript, MERN, Redux.</p>
        </section>
        <section className="col-6 box">
          <img id="no-shadow" className="content-pic" src={require('../assets/goseethis.png')} alt="GoSeeThis screenshot." />
          <a className="repo-link" target="_blank" rel="noopener noreferrer" href="https://goseethis-client.herokuapp.com">Demo</a>
          <a className="repo-link" target="_blank" rel="noopener noreferrer" href="https://github.com/thinkful-ei23/goseethis-client">Repo</a>
        </section>
      </div>
      <div className="row">
        <section className="col-6 box">
          <h2>Rack Mapper</h2>
          <p>Having a hard time finding out where to park your bike on the way to Wendy's? Want to record the location of a bike map and review the locations of others from the leisure of your desk? Use Rack Mapper!</p>
          <hr />
          <p>Tech Stack: HTML5, CSS3, JavaScript, MERN, redux, Mongo, Google Maps API.</p>
        </section>
        <section className="col-6 box">
          <img className="content-pic" src={require('../assets/rackmapper.png')} alt="Rack Mapper screenshot." />
          <a className="repo-link" target="_blank" rel="noopener noreferrer" href="https://rackmapper.herokuapp.com">Demo</a>
          <a className="repo-link" target="_blank" rel="noopener noreferrer" href="https://github.com/rcureta/bike-rack-client">Repo</a>
        </section>
      </div>
      <div className="row">
        <section className="col-6 box">
          <h2>Morse Learning</h2>
          <p>An application implementing algorithms to assist in the asset-acquisition of knowing how to articulate in morse code.</p>
          <hr />
          <p>Tech Stack: HTML5, CSS3, JavaScript, MERN, Redux, Mongo</p>
        </section>
        <section className="col-6 box">
          <img className="content-pic" src={require('../assets/morse.PNG')} alt="Morse screenshot." />
          <a className="repo-link" target="_blank" rel="noopener noreferrer" href="https://morse-learning-app.herokuapp.com">Demo</a>
          <a className="repo-link" target="_blank" rel="noopener noreferrer" href="https://github.com/thinkful-ei23/SRC-morse-client">Repo</a>
        </section>
      </div>
    </article>
  );
}

export default Projects;
