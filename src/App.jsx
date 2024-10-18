import React, { useEffect } from 'react';
import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './pages/Home';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Contact from './pages/Contact';

function App() {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 500,
      easing: 'ease-in-out',
    });

  }, [])
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact/>}/>
      </Routes>
      <Footer />

    </>

  );
}

export default App;
