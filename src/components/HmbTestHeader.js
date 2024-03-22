import { FaInstagram } from "react-icons/fa";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { GrGithub } from "react-icons/gr";

import React, { useState } from 'react'
const ToggleButton = ({isOpen, controls, label, onClick }) => {
  return (
    <button 
    type='button'
    aria-controls={controls}
    aria-expanded={isOpen}
    aria-label={label}
    onClick={onClick}
    className='toggleButton'
    >
      <span className='line-1'></span>
      <span className='line-2'></span>
      <span className='line-3'></span>
    </button>
  );
};

const Navigation = ({id, isOpen, close}) => {

  const closeMenu = e => close(false)
  return (
      <div id={id} className={`hmbnavigation${isOpen ? "open" : ""}`}>
        <div className='nav-inner'>
            <div className='hmb-a-wrap'>
              <a onClick={closeMenu} className='hmb-a' href="#aboutTop">About</a>
              <a onClick={closeMenu}  className='hmb-a' href="#projectsTop">Works</a>
              <a onClick={closeMenu}  className='hmb-a' href='#flowerTop'>Flower</a>
              <a onClick={closeMenu} className='hmb-a' href="https://drive.google.com/file/d/15VULFmG-ORZH1T7A8SmmMfV9LjCD-Ch5/view?usp=sharing">Resume</a>
            </div>

            <div className="hmb-icons-links-wrap">
                <a className='Footer-links-img' href="https://www.instagram.com/rosasdechisako/"  aria-label="instagram logo" target="_blank" rel="noopener noreferrer"> 
                <GrGithub />
                </a>
                <a className='Footer-links-img' href="https://www.linkedin.com/in/chisako-goza-547411259/"  aria-label="linkedin logo" target="_blank" rel="noopener noreferrer"> 
                <BiLogoLinkedinSquare />
                </a>
                <a className='Footer-links-img' href="https://github.com/Chii1103" aria-label="github logo" target="_blank" rel="noopener noreferrer"> 
                <FaInstagram />
                </a>
            </div>
        </div>
      </div >
   
  );
};


const HmbTestHeader = () => {
    const [isOpen,setIsOpen] = useState(false);

    const toggleFunction = () => {
      setIsOpen(!isOpen)
      // setOpen((prevState) => !prevState);
    };

  return (
    <header className='header'>
      <div className='headerInner'>
         <a href="./"> 
         <img className='HeaderComponent HeaderLogo' src="/images/logo_cg.png" alt="logo for Chisako Goza" /> 
         </a>
         
         <nav className='pcNavigation'>
           <a className='HeaderNavOption' href="#aboutTop"> About</a> 
           <a className='HeaderNavOption' href="#projectsTop" > Projects</a> 
           <a className='HeaderNavOption' href='#flowerTop'>Flower</a>
           <a className='HeaderNavOption' href="https://drive.google.com/file/d/15VULFmG-ORZH1T7A8SmmMfV9LjCD-Ch5/view?usp=sharing">Resume</a>
         </nav>

         
         </div>

       <ToggleButton isOpen={isOpen} onClick={toggleFunction} />
       <Navigation id="navigation" isOpen={isOpen} close={setIsOpen}/>
  
    </header>
  )
}

export default HmbTestHeader


  

    
 