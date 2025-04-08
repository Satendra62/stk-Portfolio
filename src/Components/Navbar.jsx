import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import MySign from '../assets/MySign.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full flex items-center justify-between px-6 py-4 shadow-md bg-white">
      {/* Logo */}
      <div className="flex items-center space-x-2">
      <span className="text-gray-800 font-extrabold text-4xl">Satendra</span>
        <img
          src={MySign} // Replace with your logo path
          alt="Logo"
          className="w-12 h-12 rounded-full "
        />
      </div>
<span className='flex gap-4 items-center'>
<span className="text-gray-800 font-medium md:hidden sm:inline-block ">Home</span>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-6 text-gray-800 font-medium ">
      <li className="hover:text-orange-500 cursor-pointer">Home</li>
        <li className="hover:text-orange-500 cursor-pointer">About Me</li>
        <li className="hover:text-orange-500 cursor-pointer">Services</li>
        <li className="hover:text-orange-500 cursor-pointer">Projects</li>
        <li className="hover:text-orange-500 cursor-pointer">Contact</li>
      </ul>

      {/* CV Button */}
      <button className="hidden md:block bg-orange-500 text-white px-4 py-2 rounded-md hover:bg-orange-600 transition">
        MY CV
      </button>

</span>
      {/* Always visible "Home" */}
      
      {/* Hamburger Icon (Mobile) */}
      <div className="md:hidden flex items-center">
        <div className="text-gray-800 font-medium pr-4 sm:hidden">Home</div>
        <button onClick={toggleMenu}>
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-white shadow-md md:hidden z-50">
          <ul className="flex flex-col items-center space-y-4 py-4 text-gray-800 font-medium">
            <li className="hover:text-orange-500 cursor-pointer">About Me</li>
            <li className="hover:text-orange-500 cursor-pointer">Services</li>
            <li className="hover:text-orange-500 cursor-pointer">Projects</li>
            <li className="hover:text-orange-500 cursor-pointer">Contact</li>
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
