import React from 'react';
import Navbar from "./components/Navbar";	
import Home from './components/Home';
import About from './components/About';
import Portfolio from './components/portfolio';
import Experience from './components/Experience';
import Footer from './components/Footer';
import Contact from './components/Contact';
import {Routes ,Route} from 'react-router-dom'

function App() {
  return (
    // <div className='dark:bg-primary-dark dark bg-primary text-white'>
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio/>} />
        <Route path="/experience" element={<Experience/>} />
        <Route path="/experience" element={<Experience/>} />
      </Routes>

      {/* <Footer/>  */}

      </>
    // </div>
  );
}

export default App;
