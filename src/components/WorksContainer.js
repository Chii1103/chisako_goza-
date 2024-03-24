import { VscGithubInverted } from "react-icons/vsc";
import { HiOutlineGlobeAlt } from "react-icons/hi";

const worksArray = [
  {
    workImg: "/images/LawOffice-Macbook.png",
    workTitle: "Lawoffice website",
    workExplanation: "#Coming soon!",
    gitHub: "https://github.com/Chii1103/Quiz-App",
    // demo: null
  },
  {
    workImg: "/images/Mysite-Macbook.png",
    workTitle: "Dentist website",
    workExplanation: "#Coming soon!",
    gitHub: "https://github.com/Chii1103/Quiz-App",
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
    workImg: "/images/QuizApp-Macbook.png",
    workTitle: "Quiz App",
    workExplanation: "#JavaScript #API",
    gitHub: "https://github.com/Chii1103/Quiz-App",
    //   demo:'',
  },
  {
    workImg: "/images/ToDoList-Macbook.png",
    workTitle: "Todo List App",
    workExplanation: "#JavaScript #API",
    gitHub: "https://github.com/Chii1103/ToDo-App",
    //   demo:'',
  },
  {
    workImg: "/images/WeatherApp-Macbook.png",
    workTitle: "Weather App",
    workExplanation: "#JavaScript #API",
    gitHub: "https://github.com/Chii1103/Weather-App",
    //   demo:'',
  },
];

const WorkCard = ({ workImg, workTitle, workExplanation, gitHub, demo }) => (
  <div className="workContainer-wrap ">
    <img className="workImage" src={workImg} alt="projects"/>
    <h3 className="workTitle">{workTitle}</h3>
    <div className="workExplanation">{workExplanation}</div>
    <div className="workButtons">
      {gitHub ? (
        <a href={gitHub} target="_blank" className="workButton" rel="noreferrer">
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
