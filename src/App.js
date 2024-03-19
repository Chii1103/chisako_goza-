
import HmbTestHeader from "./components/HmbTestHeader";
import MainVisual from "./components/MainVisual";
import AboutContainer from "./components/AboutContainer";
import WorksContainer from "./components/WorksContainer";
import MasonryLayout from "./components/MasonryLayout";
// import FlowerArrangement from './components/FlowerArrangement';
import Footer from "./components/Footer";

import "./styles/Global.scss";
import "./styles/Common.scss";
// import './styles/Header.scss';
import "./styles/HmbTest Header .scss";

import "./styles/Main.scss";
import "./styles/Card.scss";
import "./styles/Square.scss";
import "./styles/WorksContainer.scss";
import "./styles/AboutContainer.scss";
// import './styles/FlowerArrangement.scss';
import "./styles/TestFlowerArrangement.scss";
import "./styles/MasonryLayout.scss";
import "./styles/ContactContainer.scss";
import "./styles/Footer.scss";

// const images = [
//   { src: '/images/flower01.jpg', alt: 'Image 1' },
//   { src: '/images/flower02.jpg', alt: 'Image 2' },
//   { src: '/images/flower03.jpg', alt: 'Image 3' },
//   { src: '/images/flower04.jpg', alt: 'Image 4' },
//   { src: '/images/flower05.jpg', alt: 'Image 5' },
//   { src: '/images/flower06.jpg', alt: 'Image 6' },
//   { src: '/images/flower07.jpg', alt: 'Image 7' },

// ];

// export function Resume() {
//   return (
//     <div>
//       <img src="./images/Chisako_Okada_Resume.pdf" width={1000}px/>
//     </div>
//   );
// }

export function App() {
  return (
    <div className="App">
      <HmbTestHeader />
      <MainVisual />
      <AboutContainer />
      <WorksContainer />
      <MasonryLayout />
      {/* <ContactContainer /> */}
      <Footer />
    </div>
  );
}
