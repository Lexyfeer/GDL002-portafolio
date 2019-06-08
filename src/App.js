import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Aboutme from './components/Aboutme';
import Portfolio from './components/Portfolio';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="mainContainer">

        <Home />

        <Aboutme />

        <Portfolio />

        <Skills />

        <Contact />

      </div>
    </div>
  );
}

export default App;
