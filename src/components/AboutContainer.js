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

  <div className="aboutContainer-wrap">
    <h3 className="aboutTitle">{aboutTitle}</h3>
    <div className="aboutImg" >{aboutImg}</div>

  </div>
)

const AboutContainer = () => {
  return <div className="section-wrap">
    <h2 className="section-title">About</h2>
    <div className="aboutContainer">
      {aboutArray.map((about, idx) => <AboutCard key={idx} {...about} />)}
    </div>
    <div className="aboutSkill"></div>
  </div>
}



export default AboutContainer
