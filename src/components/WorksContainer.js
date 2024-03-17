import { VscGithubInverted } from "react-icons/vsc";
import { HiOutlineGlobeAlt } from "react-icons/hi";

const worksArray = [
  {
    workImg: "/images/law.jpg",
    workTitle: "Lawoffice website",
    workExplanation: "Coming soon!",
    github: "https://github.com/Chii1103/1029law-office",
    // demo: null
  },
  {
    workImg: "/images/dentist.jpg",
    workTitle: "Dentist website",
    workExplanation: "Coming soon!",
    // gitHub:'',
    //   demo:'',
  },
  // {
  //   workImg: "/images/abagauss.jpg",
  //   workTitle: "Abagauss",
  //   workExplanation: "Coming soon!",
  //   // gitHub:'',
  //   //   demo:'',
  // },
  {
    workImg: "/images/quiz.jpg",
    workTitle: "Quiz App",
    workExplanation: "Using HTML, CSS and JavaScript",
    gitHub: "https://github.com/Chii1103/Quiz-App",
    //   demo:'',
  },
  {
    workImg: "/images/toDo.jpg",
    workTitle: "Todo List App",
    workExplanation: "Using HTML, CSS and JavaScript",
    gitHub: "https://github.com/Chii1103/ToDo-App",
    //   demo:'',
  },
  {
    workImg: "/images/weatherApp.jpg",
    workTitle: "Weather App",
    workExplanation: "Using HTML, CSS and JavaScript, API",
    gitHub: "https://github.com/Chii1103/Weather-App",
    //   demo:'',
  },
];

const WorkCard = ({ workImg, workTitle, workExplanation, gitHub, demo }) => (
  <div className="workContainer-wrap ">
    <img className="workImage" src={workImg} alt="projects image"/>
    <h3 className="workTitle">{workTitle}</h3>
    <div className="workExplanation">{workExplanation}</div>
    <div className="workButtons">
      {gitHub ? (
        <a href={gitHub} target="_blank" className="workButton">
          <VscGithubInverted />
        </a>
      ) : (
        <></>
      )}
      {demo ? (
        <span className="workButton">
          <HiOutlineGlobeAlt />
        </span>
      ) : (
        <></>
      )}
    </div>
  </div>
);

const WorksContainer = () => {
  return (
    <div className="section-wrap" id="projectsTop">
      <div className="titleWrap">
        <img className="titleSakura" src="../images/sakuraS.png" alt="sakura"/>
        <h2 className="section-title">Works</h2>
      </div>
      <div className="worksContainer sectionInner">
        {worksArray.map((work, idx) => (
          <WorkCard key={idx} {...work} />
        ))}
      </div>
    </div>
  );
};

export default WorksContainer;
