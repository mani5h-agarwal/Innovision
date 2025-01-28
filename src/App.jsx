import HeroSection from "./components/HeroSection";
import Gallery from "./components/Gallery";
import Events from "./components/Events";
import "./App.css";
import LeaderBoard from "./components/LeaderBoard";
import SplashCursor from "./animations/SplashCursor";

function App() {
  return (
    <>
      <SplashCursor />
      <HeroSection />
      <LeaderBoard leaderboard_image="winners25.png"/>
      <Events />
      <Gallery />
    </>
  );
}

export default App;
