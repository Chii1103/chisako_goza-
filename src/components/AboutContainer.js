// import { SlDiamond } from "react-icons/sl";
// import { GiDiscussion } from "react-icons/gi";
// import { GiSunglasses } from "react-icons/gi";

// const aboutArray = [
//   {
//     aboutTitle: "Accurate",
//     aboutImg: <SlDiamond />,
//   },
//   {
//     aboutTitle: "Communication",
//     aboutImg: <GiDiscussion />,
//   },
//   {
//     aboutTitle: "Curiosity",
//     aboutImg: <GiSunglasses />,
//   },
// ];

const AboutCard = ({ aboutTitle, aboutImg }) => (
  <div className="aboutContainer-wrap section">
    <h3 className="aboutTitle">{aboutTitle}</h3>
    <div className="aboutImg">{aboutImg}</div>
  </div>
);
// const SkillCard = ({skillName}) => (
//   <div className="skillContainer-wrap">
//     <div className="skillName" >{skillName}</div>
//   </div>
// )

const getColor = (percentage) => {
  if (percentage >= 90) {
    return "#f576d3";
  } else if (percentage >= 70) {
    return "#f09eda";
  } else {
    return "f2d8eb";
  }
};

const SkillBar = ({ skill, percentage }) => {
  const barColor = getColor(percentage);
  return (
    <div className="skill-bar">
      <div className="skill-name">{skill}</div>
      <div className="bar-container">
        <div
          className="bar"
          style={{ width: `${percentage}%`, backgroundColor: barColor }}
        ></div>
      </div>
    </div>
  );
};

const skills = [
  { skill: "HTML", percentage: 90 },
  { skill: "CSS", percentage: 85 },
  { skill: "JavaScript", percentage: 60 },
  { skill: "React", percentage: 60 },
];

const AboutContainer = () => {
  return (
    <div className="section-wrap" id="aboutTop">
      <div className="titleWrap">
        <img className="titleSakura" src="../images/sakuraS.png" alt="sakura"/>
        <a id="aboutLink" className="section-title">
          About Me
        </a>
      </div>

      {/* <div className="aboutFlexWrap"> */}
        <div className="aboutContainer sectionInner">
          <p className="myself">
            I grew up in rural Japan and spend the first several years of my
            career in a client-facing role as a conference center event
            coordinator in Kyoto. Following the COVID-19 pandemic, I received
            the Mendix Rapid Developer certification and began my first step
            towards becoming a front-end developer. As a freelancer I have
            collaborated with dozens of clients to determine the scope of their
            projects and assess their technical requirements, and have routinely
            developed, optimized, and maintained a range of websites and
            applications. 
            <br/>My coding language core competencies are HTML, CSS,
            JavaScript and React. Although changing careers and more recently
            the country I live in has been difficult, I am proud of the progress
            I have made so far in my professional journey and I am excited to
            continue to build upon my skill set!
          </p>

          {/* {aboutArray.map((about, idx) => <AboutCard key={idx} {...about} />)} */}
        

        {/* <div className="skillContainer">
    {skillArray.map((skill, idx) => <SkillCard key={idx} {...skill} />)}
    </div> */}
        <div className="skill-graph sectionInner">
          {skills.map((skill, index) => (
            <SkillBar
              key={index}
              skill={skill.skill}
              percentage={skill.percentage}
            />
          ))}
        </div>
        </div>
        <div className="about-sns">
          <div className="icons-links-wrap">
           <a href="https://github.com/Chii1103" target="_blank" rel="noopener noreferrer"> 
           <img className='links-img' src="/images/github.png" alt="github logo"/>
           </a>
           <a href="https://www.linkedin.com/in/chisako-goza-547411259/" target="_blank" rel="noopener noreferrer"> 
            <img className='links-img' src="/images/linkedin.png" alt="linkedin logo" />
            </a>
            <a href="https://www.instagram.com/rosasdechisako/" target="_blank" rel="noopener noreferrer"> 
            <img className='links-img' src="/images/instagram.png"  alt="instagram logo"/>
            </a>
          </div>
        </div>
      </div>
    // </div>
  );
};

export default AboutContainer;
