function Header() {
  return (
    <div className='HeaderContainer'>
      <img className='HeaderComponent HeaderLogo' src="/images/logo_cg.png" alt="logo" />
      <nav className='HeaderComponent'>
        <ul className='HeaderNav'>
          <li className='HeaderNavOption'>About</li>
          <li className='HeaderNavOption'>Projects</li>
          <li className='HeaderNavOption'>Resume</li>
        </ul>
      </nav>
    </div>
  )
}

export default Header
