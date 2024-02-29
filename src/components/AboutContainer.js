import { SlDiamond } from "react-icons/sl";
import { GiDiscussion } from "react-icons/gi";
import { GiSunglasses } from "react-icons/gi";






const aboutArray = [
  {
    aboutTitle: 'Accurate',
    aboutImg: <SlDiamond />,
  },
  {
    aboutTitle: 'Communication',
    aboutImg: <GiDiscussion />,
  },
  {
    aboutTitle: 'Curiosity',
    aboutImg: <GiSunglasses />,
  }
]



const AboutCard = ({ aboutTitle, aboutImg }) => (
  <div className="aboutContainer-wrap" id="about" >
    <h3 className="aboutTitle">{aboutTitle}</h3>
    <div className="aboutImg" >{aboutImg}</div>
  </div>
)
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
  const barColor = getColor (percentage)
  return (
    <div className="skill-bar">
      <div className="skill-name">{skill}</div>
      <div className="bar-container">
        <div className="bar" style={{ width: `${percentage}%`, backgroundColor:barColor }}></div>
      </div>
     
    </div>
  );
};


  const skills = [
    { skill: 'HTML', percentage: 90 },
    { skill: 'CSS', percentage: 85 },
    { skill: 'JavaScript', percentage: 60 },
    { skill: 'React', percentage: 60 },
  ];
  


const AboutContainer = () => {
  return <div className="section-wrap" id="about">
    <div className="titleWrap">
      <img className="titleSakura" src="../images/sakuraS.png"/>
      <a id="aboutLink"   className="section-title">About</a>
    </div>
    <div className="aboutContainer">
      {aboutArray.map((about, idx) => <AboutCard key={idx} {...about} />)}
    </div>
    {/* <div className="skillContainer">
    {skillArray.map((skill, idx) => <SkillCard key={idx} {...skill} />)}
    </div> */}
    <div className="skill-graph">
      {skills.map((skill, index) => (
        <SkillBar key={index} skill={skill.skill} percentage={skill.percentage} />
      ))}
    </div>
  </div>
}



export default AboutContainer
