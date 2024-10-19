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
  }, []);

  // // Disable right-click
  // useEffect(() => {
  //   const disableRightClick = (event) => {
  //     event.preventDefault();
  //   };
  //   document.addEventListener('contextmenu', disableRightClick);

  //   return () => {
  //     document.removeEventListener('contextmenu', disableRightClick);
  //   };
  // }, []);

  // // Block developer tools shortcuts
  // useEffect(() => {
  //   const blockDevToolsShortcuts = (event) => {
  //     // Block F12
  //     if (event.keyCode === 123) {
  //       event.preventDefault();
  //     }
  //     // Block Ctrl+Shift+I (Inspect)
  //     if (event.ctrlKey && event.shiftKey && event.keyCode === 73) {
  //       event.preventDefault();
  //     }
  //     // Block Ctrl+Shift+J (Console)
  //     if (event.ctrlKey && event.shiftKey && event.keyCode === 74) {
  //       event.preventDefault();
  //     }
  //     // Block Ctrl+U (View Source)
  //     if (event.ctrlKey && event.keyCode === 85) {
  //       event.preventDefault();
  //     }
  //   };

  //   window.addEventListener('keydown', blockDevToolsShortcuts);

  //   return () => {
  //     window.removeEventListener('keydown', blockDevToolsShortcuts);
  //   };
  // }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
