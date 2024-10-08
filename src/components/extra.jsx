import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import { menu, close } from '../assets';

import logo from '/logo.png';
// import SignInModal from './SignInModal';  // Import the SignInModal component
// import SimpleSignInForm from './SimpleSigninForm';  // Import the SimpleSignInForm component
// import HelpModal from './HelpModal';
import { FaBars, FaTimes } from 'react-icons/fa'; 


export const navLinks = [
  {
    path: "/",
    title: "Home",
  },
  {
    id: "aboutus",
    title: "About US",
    path: "/aboutus"
  },
  {
    id: "buy",
    title: "Services",
    path: "/services"
  },
  {
    id: "rent",
    title: "Job Portal",
    path: "/jobportal"
  },
  {
    id: "sell",
    title: "Contact us",
    path: "/contact"
  },
];

const Navbar = () => {
  const [active, setActive] = useState('home');
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showSignInModal, setShowSignInModal] = useState(false);
  const [showSimpleSignInForm, setShowSimpleSignInForm] = useState(false);
  const [showHelpModal, setShowHelpModal] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  
//   const handleHelpClick = () => {
//     setShowSignInModal(false);
//     setShowSimpleSignInForm(false);
//     setShowHelpModal(true);
//   };

//   const handleNextClick = () => {
//     setShowSignInModal(false);
//     setShowSimpleSignInForm(true);
//   };

//   const handleForm = () => {
//     setShowSimpleSignInForm(true);
//   };

  return (

    <nav className={`w-full   h-[90px] flex items-center 
    py-2 fixed top-0 left-0 
    right-0 z-10 transition-all duration-300 ${scrolled ? 'bg-white ' : 'bg-transparent'}`} style={{ opacity: scrolled ? 0.8 : 1, overflowX: 'hidden', overflowY: 'hidden', 
      borderBottom: scrolled ? '9px solid green-900' : 'none' }}>
         
      <div className="w-full mt-2 flex
        items-center max-w-8xl  px-3" style={{ fontFamily: 'Poppins' }}>
      <Link
  to="/"
  className="flex items-center gap-2"
  onClick={() => {
    setActive('');
    window.scrollTo(0, 0);
  }}
>
  <div className="w-40 h-30 sm:w-48 sm:h-24 flex items-center justify-center">
    <img src={logo} alt="logo" className="w-full h-full object-cover" />
  </div>
</Link>

        {/* Navbar Links for large screens */}
        <ul className="uppercase hidden sm:flex flex-row gap-6 items-center ml-auto" style={{ fontFamily: 'Poppins' }}>
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`text-[23px] font-medium cursor-pointer ${scrolled ? 'text-[#003300]' : 'text-white'} hover:underline`}
              onClick={() => setActive(link.id)}
            >
              <Link to={link.path} className='font-bold' style={{ fontFamily: 'Poppins' }}>{link.title}</Link>
            </li>
          ))}
        </ul>

        {/* Sign In Button */}
        <div className="flex justify-end items-center gap-3 sm:flex sm:items-center ml-7">
          <button
            onClick={() => setShowSignInModal(true)}
           
            className="w-full bg-green-900 text-white py-2 px-4 text-1xl md md:text-2xl    rounded-full hover:bg-green-700 transition duration-300"
        style={{fontFamily:'Poppins'}}
     
          >
            Sign In
          </button>
        </div>


        {/* Menu Button for small screens */}
        <div className="sm:hidden flex items-end mr-1 ml-3">
  {toggle ? (
    <FaTimes
      className="w-[24px] h-[24px] text-green-900 cursor-pointer"
      onClick={() => setToggle(!toggle)}
    />
  ) : (
    <FaBars
      className="w-[24px] h-[24px] text-green-900 cursor-pointer"
      onClick={() => setToggle(!toggle)}
    />
  )}
</div>



        {/* Menu Items for small screens */}
        <div className={`${toggle ? 'fixed inset-0 bg-green-900 bg-opacity-75 z-30 flex justify-center items-center' : 'hidden'}
         sm:hidden w-full h-full top-0 left-0`} onClick={() => setToggle(false)}>
          <div className="flex flex-col items-center gap-4" style={{ fontFamily: 'Poppins' }}>
            {navLinks.map((link) => (
              <div
                key={link.id}
                className={`hover:underline text-[18px] font-bold cursor-pointer ${scrolled ? 'text-white' : 'text-white'}`}
                style={{ fontFamily: 'Poppins' }}
                onClick={() => {
                  setActive(link.title);
                  setToggle(false);
                }}
              >
                <Link    style={{ fontFamily: 'Poppins' }} to={link.path}>{link.title}</Link>
              </div>
            ))}
          </div>
        </div>
      </div>
{/* 
      <SignInModal 
    show={showSignInModal} 
    onClose={() => setShowSignInModal(false)} 
    onNextClick={handleNextClick}
    onHelpClick={handleHelpClick}
  />

  <SimpleSignInForm 
    show={showSimpleSignInForm} 
    onClose={() => setShowSimpleSignInForm(false)} 
    onHelpClick={handleForm}
  />

  <HelpModal 
    show={showHelpModal} 
    onClose={() => setShowHelpModal(false)} 
  /> */}
    </nav>
  );
};

export default Navbar;
