import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/HeroSection/HeroSection";
import Fractal from "./components/FractalSection/Fractal";
import BackStory from "./components/BackStory/BackStory";
import RoadMap from "./components/RoadMap/RoadMap";
import TeamSection from "./components/Team/TeamSection";


function App() {
  return (
    <div className="background-image position-relative">
      <div className="svg-overlay">
      <div className="customWidth mx-auto">
        <Navbar></Navbar>
        <HeroSection></HeroSection>
        <Fractal></Fractal>
        <BackStory></BackStory>
        <RoadMap> </RoadMap>
        <TeamSection></TeamSection>
      </div>
      </div>
    </div>
  );
}

export default App;
