

function Footer() {
  return (
    <div className='Footer-wrap'>

      <nav className='FooterComponent'>
        <ul className='FooterNav' >
         <a href="#aboutTop"> <li className='FooterNavOption'>About</li></a>
         <a href="#projectsTop">   <li className='FooterNavOption'>Projects</li></a>
         <a href="#flowerTop">   <li className='FooterNavOption'>Flower</li></a>
         <a href="https://drive.google.com/file/d/1hEGyBhbsubcu0OPYKwxugpSj6EgnwRiS/view?usp=sharing">   <li className='FooterNavOption'>Resume</li></a>

        </ul>
      </nav>
      <div className="Footer-icons-links-wrap">
      <a href="https://github.com/Chii1103" target="_blank" rel="noopener noreferrer"> 
        <img className='Footer-links-img' src="/images/github.png" alt="github logo"/>
        </a>
        <a href="https://www.linkedin.com/in/chisako-goza-547411259/" target="_blank" rel="noopener noreferrer"> 
        <img className='Footer-links-img' src="/images/linkedin.png" alt="linkedin logo" />
        </a>
        <a href="https://www.instagram.com/rosasdechisako/" target="_blank" rel="noopener noreferrer"> 
        <img className='Footer-links-img' src="/images/instagram.png" alt="instagram logo"/>
        </a>
      </div>

    </div>
  )
}

export default Footer
