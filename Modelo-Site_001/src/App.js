import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home'
import Service from './components/Service/Service';
import About from './components/About/About';
import Contact from './components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <section id="home">
        <Home/>
      </section>
      <section id="about">
        <About />
      </section>
      <section id="services">
       <Service />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </div>
  );
}

export default App;
