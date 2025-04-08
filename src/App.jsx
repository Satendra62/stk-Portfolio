// App.jsx
import React from 'react';
import Navbar from './Components/Navbar';
import Home from './Pages/Hero';
import Services from './Pages/Services';
import Projects from './Pages/Projects';
import About from './Pages/About';
import Skills from './Pages/Skills';
import Contact from './Pages/Contact';

const App = () => {
  return (
    <div>
      <Navbar />
      <Home/>
      <About/>
      <Skills/>
      <Services/>
      <Projects/>
      <Contact/>
    </div>
  );
};

export default App;
