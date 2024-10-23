import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';


function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="font-semibold flex items-center justify-between fixed bg-white w-full z-10  " >
        <a href="/">
          <img src="/logo1.png" alt="" className="w-20 h-20 mx-5 xl:mx-36" />
        </a>

        <div id="menu-container ">
          <ul id="menu" className="hidden lg:flex gap-20 text-xl px-10">
            <li className="relative group">
              <NavLink to='/' className={({ isActive }) => isActive ? 'text-blue-500 ' : 'text-black'} >
                Home
              </NavLink>
              <span className="lihover"></span>
            </li>
            <li className="relative group">

              <NavLink to='/about' className={({ isActive }) => isActive ? 'text-blue-500 ' : 'text-black'}>
                About
              </NavLink>
              <span className="lihover"></span>
            </li>

            <li className="relative group">

              <NavLink to='/gallery' className={({ isActive }) => isActive ? 'text-blue-500 ' : 'text-black'} >  Gallery</NavLink>
              <span className="lihover"></span>
            </li>
            <li className="relative group">

              <NavLink to='/testimonials' className={({ isActive }) => isActive ? 'text-blue-500 ' : 'text-black'} >  Testimonials</NavLink>
              <span className="lihover"></span>
            </li>
            <li className="relative group">

              <NavLink to='/contact' className={({ isActive }) => isActive ? 'text-blue-500 ' : 'text-black'}>   Contact</NavLink>
              <span className="lihover"></span>
            </li>
          </ul>
        </div>

        <button id="menu-toggle" className="lg:hidden me-5" onClick={toggleMenu}>
          <FontAwesomeIcon icon={faBars} className='fa-2x' />
        </button>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed top-20 left-0 lg:hidden bg-gray-100 font-semibold w-52 h-full shadow-lg transition-transform duration-300 z-10 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full '
          }`}
      >
        <nav className="flex flex-col p-4 space-y-2 ">
          <NavLink to='/' className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            Home
          </NavLink>
          <NavLink to='/about' className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            About
          </NavLink>

          <NavLink to='/gallery' className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            Gallery
          </NavLink>
          <NavLink to='/testimonials' className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            Testimonials
          </NavLink>
          <NavLink to='/contact' className={({ isActive }) => isActive ? 'text-blue-500' : 'text-black'} onClick={() => setIsMenuOpen(!isMenuOpen)} >
            Contact
          </NavLink>
        </nav>
      </div>
    </>
  );
}

export default Header;
