import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import MySign from '../assets/MySign.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Smooth scroll function
  const smoothScroll = (id) => {
    closeMenu(); // Close mobile menu
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  return (
    <nav className="fixed top-0 w-full flex items-center justify-between px-6 pl-1 py-2 shadow-md bg-white z-50">
      {/* Logo */}
      <img src={MySign} alt="Logo" className="h-15 w-65 rounded-full " onClick={() => smoothScroll('hero')}/>

      <span className='flex gap-4 items-center'>


        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-800 font-medium">
          <li className="hover:text-orange-500 cursor-pointer" onClick={() => smoothScroll('hero')}>Home</li>
          <li className="hover:text-orange-500 cursor-pointer" onClick={() => smoothScroll('About')}>About Me</li>
          <li className="hover:text-orange-500 cursor-pointer" onClick={() => smoothScroll('Services')}>Services</li>
          <li className="hover:text-orange-500 cursor-pointer" onClick={() => smoothScroll('Project')}>Projects</li>
          <li className="hover:text-orange-500 cursor-pointer" onClick={() => smoothScroll('Contact')}>Contact</li>
        </ul>

        {/* CV Button */}
        <button className="hidden md:block bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition">
          <a href="https://drive.google.com/file/d/1BwWNUm8uoGfyk5-bbKbEHWuZfXEzpnp1/view?usp=drive_link" target='_blank'>Download CV</a>
        </button>
      </span>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md md:hidden z-50">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-800 font-medium">
            <li className="hover:text-orange-500 cursor-pointer" onClick={() => smoothScroll('hero')}>Home</li>
            <li className="hover:text-orange-500 cursor-pointer" onClick={() => smoothScroll('About')}>About Me</li>
            <li className="hover:text-orange-500 cursor-pointer" onClick={() => smoothScroll('Services')}>Services</li>
            <li className="hover:text-orange-500 cursor-pointer" onClick={() => smoothScroll('Project')}>Projects</li>
            <li className="hover:text-orange-500 cursor-pointer" onClick={() => smoothScroll('Contact')}>Contact</li>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition">
              <a href="https://drive.google.com/file/d/1BwWNUm8uoGfyk5-bbKbEHWuZfXEzpnp1/view?usp=drive_link" target='_blank'>Download CV</a>
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;