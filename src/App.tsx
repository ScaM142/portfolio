import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RedeemPage from './components/RedeemPage';

function App() {
  return (

    <Router>
      <Routes>
        {/* ...existing routes... */}
        <Route path="/" element={
          <div className="min-h-screen bg-white">
            <Header />
            <main>
              <Hero />
              <About />
              <Skills />
              <Projects />
              <Contact />
            </main>
            <Footer />
          </div>
        } />

        <Route path="/redeem" element={<RedeemPage />} />
        {/* ...existing routes... */}
      </Routes>
    </Router>

    /*
        <div className="min-h-screen bg-white">
          <Header />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Contact />
          </main>
          <Footer />
        </div>*/
  );
}

export default App;