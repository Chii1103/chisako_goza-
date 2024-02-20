import { RxHamburgerMenu } from "react-icons/rx";

function Header() {
  return (
    <div className='HeaderContainer' id="headerTop" >
      <img className='HeaderComponent HeaderLogo' src="/images/logo_cg.png" alt="logo" />
      <nav className='HeaderComponent'>
        <ul className='HeaderNav'>
        <a href="#about"> <li className='HeaderNavOption' id="about" >About</li> </a>
          <a href="#projectsTop">  <li className='HeaderNavOption' id="projectsNav">Projects</li> </a>
          <a href="#contact"> <li className='HeaderNavOption' id="resumeNav">Resume</li> </a>
        </ul>
      </nav>
      <div className="menuIcon"><RxHamburgerMenu /></div>
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
