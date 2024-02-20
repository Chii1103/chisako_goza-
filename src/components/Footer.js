

function Footer() {
  return (
    <div className='Footer-wrap'>
     <a href="#"><img className="FooterLogo" src="/images/logo_cg.png" alt="logo" /></a>
      <nav className='FooterComponent'>
        <ul className='FooterNav' >
         <a href="#about"> <li className='FooterNavOption'>About</li></a>
         <a href="#projectsTop">   <li className='FooterNavOption'>Projects</li></a>
         <a href="#contact">   <li className='FooterNavOption'>Contact</li></a>
        </ul>
      </nav>
      <div className="Footer-icons-links-wrap">
      <a href="https://github.com/Chii1103" target="_blank" rel="noopener noreferrer"> 
        <img className='Footer-links-img' src="/images/github.png" />
        </a>
        <a href="https://www.linkedin.com/in/chisako-goza-547411259/" target="_blank" rel="noopener noreferrer"> 
        <img className='Footer-links-img' src="/images/linkedin.png" />
        </a>
        <a href="https://www.instagram.com/rosasdechisako/" target="_blank" rel="noopener noreferrer"> 
        <img className='Footer-links-img' src="/images/instagram.png" />
        </a>
      </div>

    </div>
  )
}

export default Footer
