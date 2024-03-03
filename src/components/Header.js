import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

function Header() {

const [isMenuOpen, setIsMenuOpen] = useState(false);

 const toggleMenu = () => {
  setIsMenuOpen(!isMenuOpen);
 };

  return (
    <div className='HeaderContainer' id="headerTop" >
     <a href="#"> <img className='HeaderComponent HeaderLogo' src="/images/logo_cg.png" alt="logo" /> </a>
     
      <nav className={`HeaderComponent ${isMenuOpen ? 'open' : ''}`}>
        <ul className='HeaderNav'>
         <li className='HeaderNavOption' id="about"> About</li> 
          <li className='HeaderNavOption' id="projectsTop" > Projects</li> 
        <li className='HeaderNavOption' id="contact" >Resume</li> 
        </ul>
      </nav>
      <div className="menuIcon" onClick={toggleMenu}><RxHamburgerMenu /></div>
    
    </div>
  )
}



// const pageJump = () => {
//   // ここから
//   // 各要素のページ上からの距離（位置）　を取得
//   let topPosition_about = ('#aboutTop').offset().top;
//   let topPosition_projects = ('#projectsTop').offset().top;
//   let topPosition_resume = ('#resumeTop').offset().top;
//   console.log(topPosition_about);
//   console.log(topPosition_projects);
//   console.log(topPosition_resume);
//   // 

//   ('#aboutNav').click(function () {
//       ('body,html').animate({
//           scrollTop: topPosition_about - 50
//       }, 500);
//       return false;
//   });
//   ('#projectsNav').click(function () {
//       ('body,html').animate({
//           scrollTop: topPosition_projects - 50
//       }, 500);
//       return false;
//   });
//   ('#resumeNav').click(function () {
//       ('body,html').animate({
//           scrollTop: topPosition_resume - 50
//       }, 500);
//       return false;
//   });
// };



export default Header
