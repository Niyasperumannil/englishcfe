import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="font-semibold flex items-center justify-between fixed bg-white w-full z-10  " >
        <a href="">
          <img src="/logo1.png" alt="" className="w-20 h-20 mx-5 md:mx-36" />
        </a>

        <div id="menu-container ">
          <ul id="menu" className="hidden md:flex gap-20 text-xl px-10">
            <li className="relative group">
              <a href="/">Home</a>
              <span className="lihover"></span>
            </li>
            <li className="relative group">
              <a href="/about">About</a>
              <span className="lihover"></span>
            </li>
            <li className="relative group">
              <a href="">Placements</a>
              <span className="lihover"></span>
            </li>
            <li className="relative group">
              <a href="">Gallery</a>
              <span className="lihover"></span>
            </li>
            <li className="relative group">
              <a href="/contact">Contact</a>
              <span className="lihover"></span>
            </li>
          </ul>
        </div>

        <button id="menu-toggle" className="md:hidden me-5" onClick={toggleMenu}>
        <FontAwesomeIcon icon={faBars} />
        </button>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed top-20 left-0 md:hidden bg-gray-100 font-semibold w-52 h-full shadow-lg transition-transform duration-300 ease-in-out transform ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <nav className="flex flex-col p-4 space-y-2">
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="">Placements</a>
          <a href="">Gallery</a>
          <a href="/contact">Contact</a>
        </nav>
      </div>
    </>
  );
}

export default Header;
