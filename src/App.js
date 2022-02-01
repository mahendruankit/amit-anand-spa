import React, { useRef } from 'react';
import { HashRouter } from 'react-router-dom';
import About from './components/About/About';
import Header from './components/Header/Header';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import Portfolio from './components/Portfolio/Portfolio';
import './App.scss';

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const contactRef = useRef(null);
  const portfolioRef = useRef(null);

  return (
    <div ref={homeRef} className='App'>
      <HashRouter>
        <Header refs={{ aboutRef, portfolioRef, contactRef, homeRef }} />
        <About ref={aboutRef} />
        <Portfolio ref={portfolioRef} />
        <Contact ref={contactRef} />
      </HashRouter>
      <Footer />
    </div>
  );
}

export default App;
