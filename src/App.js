import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Aboutme from './components/Aboutme';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';

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
      </div>
    </HashRouter>
  );
}

export default App;
