import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import './App.css';
import Navigation from './components/Navigation';
import Home from './components/Home';
import Aboutme from './components/Aboutme';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/footer';

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
