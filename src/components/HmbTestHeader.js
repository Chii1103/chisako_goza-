import React, { useState } from 'react'
import { Link } from "react-router-dom";
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

const Navigation = ({id, isOpen}) => {
  return (
      <div id={id} className={`hmbnavigation${isOpen ? "open" : ""}`}>

        <div className='nav-inner'>
          <div className='hmb-a-wrap'>
        <a className='hmb-a' href="#aboutTop">About</a>
        <a className='hmb-a' href="#projectsTop">Works</a>
        <a className='hmb-a' href='#flowerTop'>Flower</a>
        <a className='hmb-a' href="https://drive.google.com/file/d/1hEGyBhbsubcu0OPYKwxugpSj6EgnwRiS/view?usp=sharing">Resume</a>
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
         <a href="#"> 
         <img className='HeaderComponent HeaderLogo' src="/images/logo_cg.png" alt="logo" /> 
         </a>
         
         <nav className='pcNavigation'>
           <a className='HeaderNavOption' href="#aboutTop"> About</a> 
           <a className='HeaderNavOption' href="#projectsTop" > Projects</a> 
           <a className='HeaderNavOption' href='#flowerTop'>Flower</a>
           <a className='hmb-a' href="https://drive.google.com/file/d/1hEGyBhbsubcu0OPYKwxugpSj6EgnwRiS/view?usp=sharing">Resume</a>
         </nav>
         </div>

       <ToggleButton isOpen={isOpen} onClick={toggleFunction} />
       <Navigation id="navigation" isOpen={isOpen} />
  
    </header>
  )
}

export default HmbTestHeader


  

    
 