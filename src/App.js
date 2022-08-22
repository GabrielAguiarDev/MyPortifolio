import React, { useEffect } from 'react'

import Aos from "aos";
import "aos/dist/aos.css"

import About from './components/About'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Header from './components/Header'
import Home from './components/Home'
import Projects from './components/Projects'

import './App.css';

function App() {
  
  useEffect(() => {
    Aos.init({ duration: 1000 });
  })

  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <About />
        <Experience />
        <Projects />
        <Footer />
      </main>
    </div>
  );
}

export default App;
