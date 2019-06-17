import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Aboutme from './components/Aboutme';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';
import iconLinkedin from './assets/images/icon-linkedin-52.png';
import iconGithub from './assets/images/icon-github.png';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Navbar />
        <Route exact path="/" component={Home} />
        <Route path="/Aboutme" component={Aboutme} />
        <Route path="/Portfolio" component={Portfolio} />
        <Route path="/Skills" component={Skills} />
        <Route path="/Contact" component={Contact} />
        <footer className="containerSocial">
            <div>
              <p>¡Sigueme en mis redes sociales !</p>
            </div>

            <a href="https://www.linkedin.com/in/nancyrodriguezlopez/" rel="noopener noreferrer" target="_blank">
              <label>LinkedIn</label>
              <img className="" src={iconLinkedin} alt="linkedin" />
            </a>

            <a href="https://github.com/Lexyfeer" rel="noopener noreferrer" target="_blank">
              <label>Github</label>
              <img className="" src={iconGithub} alt="github" />
            </a>
          </footer>
      </div>
    </HashRouter>
  );
}

export default App;
