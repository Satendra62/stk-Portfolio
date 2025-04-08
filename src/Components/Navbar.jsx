import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import MySign from '../assets/MySign.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 w-full flex items-center justify-between px-6 pl-1 py-2 shadow-md bg-white">
      {/* Logo */}
      
        <img
          src={MySign} // Replace with your logo path
          alt="Logo"
          className="h-15 md:h-20 w-65 rounded-full "
        />
<span className='flex gap-4 items-center'>
  <a href="#hero">
  <span className="text-gray-800 font-medium md:hidden sm:inline-block ">Home</span></a>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 text-gray-800 font-medium ">
      <li className="hover:text-orange-500 cursor-pointer">Home</li>
      <a href="#About">
      <li className="hover:text-orange-500 cursor-pointer">About Me</li></a>
      <a href="#Services">
      <li className="hover:text-orange-500 cursor-pointer">Services</li></a>
      <a href="#Project">
      <li className="hover:text-orange-500 cursor-pointer">Projects</li></a>
        <a href="#Contact">
        <li className="hover:text-orange-500 cursor-pointer">Contact</li></a>
      </ul>

      {/* CV Button */}
      <button className="hidden md:block bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition">
        MY CV
      </button>

</span>
      {/* Always visible "Home" */}
      
      {/* Hamburger Icon (Mobile) */}
      <div className="md:hidden flex items-center">
        
        <button onClick={toggleMenu}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md md:hidden z-50">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-800 font-medium">
          <a href="#About">
      <li className="hover:text-orange-500 cursor-pointer">About Me</li></a>
      <a href="#Services">
      <li className="hover:text-orange-500 cursor-pointer">Services</li></a>
      <a href="#Project">
      <li className="hover:text-orange-500 cursor-pointer">Projects</li></a>
        <a href="#Contact">
        <li className="hover:text-orange-500 cursor-pointer">Contact</li></a>
            <button className="bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition">
              MY CV
            </button>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
