

function Footer() {
  return (
    <div className='Footer-wrap'>
      <img className="FooterLogo" src="/images/logo_cg.png" alt="logo" />
      <nav className='FooterComponent'>
        <ul className='FooterNav' >
          <li className='FooterNavOption'>About</li>
          <li className='FooterNavOption'>Projects</li>
          <li className='FooterNavOption'>Resume</li>
        </ul>
      </nav>
      <div className="Footer-icons-links-wrap">
        <img className='Footer-links-img' src="/images/github.png" />
        <img className='Footer-links-img' src="/images/linkedin.png" />
        <img className='Footer-links-img' src="/images/instagram.png" />
      </div>

    </div>
  )
}

export default Footer
