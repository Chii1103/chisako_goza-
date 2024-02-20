import Header from './components/Header';
import MainVisual from './components/MainVisual'
import AboutContainer from './components/AboutContainer';
import Card from './components/Card';
import WorksContainer from './components/WorksContainer';

import FlowerArrangement from './components/FlowerArrangement';
import ContactContainer from './components/ContactContainer';
import Footer from './components/Footer';


import './styles/Common.scss';
import './styles/Header.scss';
import './styles/Main.scss';
import './styles/Card.scss';
import './styles/Square.scss';
import './styles/WorksContainer.scss';
import './styles/AboutContainer.scss';
import './styles/FlowerArrangement.scss';
import './styles/ContactContainer.scss';

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


const App = () => {
  return (
    <div className="App">
      <Header />
      <MainVisual />
      {/* {sections.map((section, s) =>
        <Card key={s} title={section.title} body={section.body} />)
      } */}

      <AboutContainer />
      <WorksContainer />
      {/* <Card title={'Flowers'} body={['Himawari', 'others']}/> */}
      <FlowerArrangement />
      <ContactContainer />
      <Footer />
    </div>
  );
}

export default App;
