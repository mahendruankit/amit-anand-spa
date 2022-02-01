import React, { useRef } from 'react';
import { HashRouter } from 'react-router-dom';
import stringResource from './resources/strings';
import CookieConsent from 'react-cookie-consent';
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
    <div ref={homeRef} className='app'>
      <HashRouter>
        <Header refs={{ aboutRef, portfolioRef, contactRef, homeRef }} />
        <div className='logo__container'>
          <div className='logo'></div>
        </div>
        <About ref={aboutRef} />
        <Portfolio ref={portfolioRef} />
        <Contact ref={contactRef} />
      </HashRouter>
      <Footer />
      <CookieConsent
        location='bottom'
        buttonText={stringResource.portfolio.gdprbutton}
        cookieName='gdprCookie'
        style={{
          background: '#ffe5b4',
          fontSize: '1em',
          color: '#000000',
        }}
        buttonStyle={{
          color: '#000000',
          fontSize: '1em',
          background: '#ffc107',
          padding: '0px 5px 0px 5px',
        }}
        expires={150}
      >
        {stringResource.portfolio.gdpr}
      </CookieConsent>
    </div>
  );
}

export default App;
