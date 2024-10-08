import React, { useState } from 'react';
import { FaEnvelope, FaPhoneAlt, FaWhatsapp, FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube } from 'react-icons/fa';
import { HiMenu, HiX } from 'react-icons/hi';
import logo from "../assets/logo_new.png";
import { Link } from 'react-router-dom';
import { useEffect} from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

      const [isScrolled, setIsScrolled] = useState(false);
    
      // Handle scroll event
      useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 20) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
  return (
   

    <>
      {/* Top Header - Hidden on small screens
      <div className="bg-black w-full
      fixed  text-white p-2 top-0 z-50 justify-between items-center hidden sm:flex">
        <div className="flex items-center space-x-4 pl-3 pr-2">
          <FaEnvelope />
          <span>contact@indianpersonnel.com</span>
          <FaPhoneAlt />
          <span>+91-22-61431234</span>
          <FaWhatsapp />
          <span>+91-8291999288</span>
        </div>
        <div className="flex space-x-4 pr-5">
          <FaFacebookF className="hover:text-red-700 cursor-pointer transition duration-300" />
          <FaTwitter className="hover:text-red-700 cursor-pointer transition duration-300" />
          <FaLinkedinIn className="hover:text-red-700 cursor-pointer transition duration-300" />
          <FaYoutube className="hover:text-red-700 cursor-pointer transition duration-300" />
          <FaWhatsapp className="hover:text-red-700 cursor-pointer transition duration-300" />
        </div>
      </div>

      {/* Main Navbar 
      <div className="bg-white shadow-md fixed top-40
       sm:top-[40px] 
      w-full z-40 transition-all duration-300"> */}
      <div className={`bg-black w-full text-white p-2 top-0 z-50 justify-between items-center hidden sm:flex transition-transform duration-300 ${isScrolled ? '-translate-y-full' : 'translate-y-0'}`}>
        <div className="flex items-center space-x-4 pl-3 pr-2">
          <FaEnvelope />
          <span>contact@indianpersonnel.com</span>
          <FaPhoneAlt />
          <span>+91-22-61431234</span>
          <FaWhatsapp />
          <span>+91-8291999288</span>
        </div>
        <div className="flex space-x-4 pr-5">
          <FaFacebookF className="hover:text-red-700 cursor-pointer transition duration-300" />
          <FaTwitter className="hover:text-red-700 cursor-pointer transition duration-300" />
          <FaLinkedinIn className="hover:text-red-700 cursor-pointer transition duration-300" />
          <FaYoutube className="hover:text-red-700 cursor-pointer transition duration-300" />
          <FaWhatsapp className="hover:text-red-700 cursor-pointer transition duration-300" />
        </div>
      </div>

      {/* Main Navbar - Appears after top nav scrolls away */}
      <div className={`bg-white shadow-md fixed w-full z-40 transition-all duration-300 ${isScrolled ? 'top-0' : 'top-[40px]'}`}>
        <div className="max-w-7xl mx-auto px-4 h-[60px] flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="h-12 w-auto" />
          </div>

          {/* Menu for large screens */}
          <div className="hidden lg:flex space-x-8 items-center font-semibold">
            <Link to="/" className="hover:text-brown-700 transition duration-300">HOME</Link>
            <Link to="/contact-us" className="hover:text-brown-700 transition duration-300">CONTACT US</Link>
            <Link to="/quick-register" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300">Quick Register</Link>
            <Link to="/work-study-canada" className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300">Work & Study in Canada</Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <HiX className="w-6 h-6" /> : <HiMenu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white shadow-md p-4">
            <Link to="/" className="block py-2">HOME</Link>
            <Link to="/contact-us" className="block py-2">CONTACT US</Link>
             <Link to="/quick-register">
             <button className="w-full bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition duration-300">Quick Register</button>
            
             </Link>
             <Link to="/work-study-canada">
            
            <button className="w-full bg-red-500 text-white px-4 py-2 mt-2 rounded hover:bg-red-600 transition duration-300">Work & Study in Canada</button>
          </Link>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
