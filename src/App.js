import HmbTestHeader from "./components/HmbTestHeader";
import MainVisual from "./components/MainVisual";
import AboutContainer from "./components/AboutContainer";
import WorksContainer from "./components/WorksContainer";
import MasonryLayout from "./components/MasonryLayout";
import Footer from "./components/Footer";

import "./styles/Global.scss";
import "./styles/Common.scss";
import "./styles/HmbTest Header .scss";
import "./styles/Main.scss";
import "./styles/Card.scss";
import "./styles/WorksContainer.scss";
import "./styles/AboutContainer.scss";
import "./styles/MasonryLayout.scss";
import "./styles/Footer.scss";

export function App() {
  return (
    <div className="App">
      <HmbTestHeader />
      <MainVisual />
      <AboutContainer />
      <WorksContainer />
      <MasonryLayout />
      <Footer />
    </div>
  );
}
