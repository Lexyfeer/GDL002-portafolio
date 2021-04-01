import './App.scss';

import { HashRouter, Route } from 'react-router-dom';

import Aboutme from './components/Aboutme';
import Contact from './components/Contact';
import Footer from './components/footer';
import Home from './components/Home';
import Navigation from './components/Navigation';
import Portfolio from './components/Portfolio';
import React from 'react';
import Skills from './components/Skills';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Navigation />
        <Route exact path="/" component={Home} />
        <Route path="/Aboutme" component={Aboutme} />
        <Route path="/Portfolio" component={Portfolio} />
        <Route path="/Skills" component={Skills} />
        <Route path="/Contact" component={Contact} />
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
