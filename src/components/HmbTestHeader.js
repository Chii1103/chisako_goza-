import { FaInstagram } from "react-icons/fa";
import { BiLogoLinkedinSquare } from "react-icons/bi";
import { GrGithub } from "react-icons/gr";
import HamburgerButton from './hamburger'

import React, { useState } from 'react'

const Navigation = ({ close }) => {
	return (
		<div id="navigation" className={"hmbnavigation"} onClick={close} >
			<div className='nav-inner'>
				<div className='hmb-a-wrap'>
					<a className='hmb-a' href="#aboutTop">About</a>
					<a className='hmb-a' href="#projectsTop">Works</a>
					<a className='hmb-a' href='#flowerTop'>Flower</a>
					<a className='hmb-a' href="https://drive.google.com/file/d/15VULFmG-ORZH1T7A8SmmMfV9LjCD-Ch5/view?usp=sharing" target="_blank" rel="noreferrer">Resume</a>
				</div>

				<div className="hmb-icons-links-wrap">
					<a className='Footer-links-img' href="https://www.instagram.com/rosasdechisako/" aria-label="instagram logo" target="_blank" rel="noopener noreferrer">
						<GrGithub />
					</a>
					<a className='Footer-links-img' href="https://www.linkedin.com/in/chisako-goza-547411259/" aria-label="linkedin logo" target="_blank" rel="noopener noreferrer">
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
	const [isOpen, setIsOpen] = useState(false);

	return <>
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
			<HamburgerButton onClick={() =>  setIsOpen(true)} className={'mobileDrawer'}/>
		</header>
		{isOpen && <Navigation close={() => setIsOpen(false)}/>}
	</>
}

export default HmbTestHeader
