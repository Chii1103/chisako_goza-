import Header from './components/Header';
import MainVisual from './components/MainVisual'
import Card from './components/Card';
import WorksContainer from './components/WorksContainer';
import Footer from './components/Footer';

import './styles/Header.scss';
import './styles/Main.scss';
import './styles/Card.scss';
import './styles/Square.scss';
import './styles/WorksContainer.scss';
import './styles/Footer.scss';



const sections = [
  {
    title: 'About',
    body: ['Accurate', 'Interactive Communication', 'Curiosity']

  },
  {
    title: 'Works',
    body: ['1', '2', '3']

  },
  {
    title: 'Flower Arrangement',
    body: ['T', 'B', 'D']

  },
  {
    title: 'Contact',
    body: ['My Resume', 'My Email', 'My Instagram']

  },
]

const worksArray = [
  {
    // workImg: Image from '/images/mainVisual',
    workTitle: 'Lawoffice website',
    workExplanation: 'this is the website for law office in Oklahoma.',
    // gitHub:'',
    //   demo:'',
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

const App = () => {
  return (
    <div className="App">
      <Header />
      <MainVisual />
      {sections.map((section, s) =>
        <Card key={s} title={section.title} body={section.body} />)}{/**Key is required here */}

      {worksArray.map((work, idx) =>
        <WorksContainer
          key={idx}
          workImg={work.workImg}
          workTitle={work.workTitle}
          workExplanation={work.workExplanation}
          gitHub={work.gitHub}
          demo={work.demo}
        />
      )}


      <Footer />
    </div>
  );
}

export default App;
