import { VscGithubInverted } from "react-icons/vsc";
import { HiOutlineGlobeAlt } from "react-icons/hi";

const worksArray = [
  {
    workImg: '/images/mainVisual.png',
    workTitle: 'Lawoffice website',
    workExplanation: 'this is the website for law office in Oklahoma.',
    demo: null
  },
  {
    // workImg: Image from '/images/mainVisual',
    workTitle: 'Dentist website',
    workExplanation: 'this is the website for law office in Japan.',
    // gitHub:'',
    //   demo:'',
  },
  {
    // workImg: Image from '/images/mainVisual',
    workTitle: 'Abagauss',
    workExplanation: 'I will collaborate this project with Sanket Jain.',
    // gitHub:'',
    //   demo:'',
  },
  {
    // workImg: Image from '/images/mainVisual',
    workTitle: 'Quiz App',
    workExplanation: 'Using HTML, CSS and JavaScript',
    // gitHub:'',
    //   demo:'',
  },
  {
    // workImg: Image from '/images/mainVisual',
    workTitle: 'Todo List App',
    workExplanation: 'Using HTML, CSS and JavaScript',
    // gitHub:'',
    //   demo:'',
  },
  {
    // workImg: Image from '/images/mainVisual',
    workTitle: 'Digital clock',
    workExplanation: 'Using HTML, CSS and JavaScript',
    // gitHub:'',
    //   demo:'',
  },
  {
    // workImg: Image from '/images/mainVisual',
    workTitle: 'Tic Tac Toe game',
    workExplanation: 'Using HTML, CSS and JavaScript',
    // gitHub:'',
    //   demo:'',
  }

]

const WorkCard = ({workImg, workTitle, workExplanation, gitHub, demo}) => (
  <div className="workContainer-wrap">
    <img className="workImage" src={workImg}/>
    <h3 className="workTitle">{workTitle}</h3>
    <div className="workExplanation">{workExplanation}</div>
    <div className="workButtons">
      {gitHub ? <span className="workButton"><VscGithubInverted /></span>: <></>}
      {demo ? <span className="workButton"><HiOutlineGlobeAlt /></span> : <></>}
    </div>
  </div>
)

const WorksContainer = () => {
  return <div className='section-wrap'>
    <h2 className="section-title">My work!</h2>
    <div className="worksContainer">
      {worksArray.map((work, idx) => <WorkCard key={idx} {...work}/>)}
    </div>
  </div>
}

export default WorksContainer
