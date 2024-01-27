import { IoLogoGithub } from "react-icons/io";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa6";
import Links from "../static/links"

function MainVisual() {
  return (
    <div className="mainVisual-wrap">
      <div className="mv-left">
        <div className="icons-links-wrap">
          <a className='links-img' href={Links.GITHUB} target="_blank"><IoLogoGithub /></a>
          {/* <img className='links-img' src="/images/github.png" /> */}
          <a className='links-img' href={Links.LINKEDIN} target="_blank"><IoLogoLinkedin /></a>
          {/* <img className='links-img' src="/images/linkedin.png" /> */}
          <a className='links-img' href={Links.INSTAGRAM} target="_blank"><FaInstagram /></a>
          {/* <img className='links-img' src="/images/instagram.png" /> */}
        </div>
      </div>
      <div className='mv-center'>
        <h1 className='mv-h1'>Hello, I am Chisako Goza </h1>
        <h2 className='mv-h2'>Thank you so much for visiting！</h2>
        <img className="mv-me" src="/images/mainVisual.png" />
      </div>
      <div className='mv-right'>
        <p className='mv-p'>
          I am a front end  developer from Kyoto, Japan, currently based in New York , USA.
        </p>
        {/* <button className='btn-view'>View my works</button> */}
      </div>


    </div>
  );
};

export default MainVisual;
