import HeroSection from "./components/HeroSection";
import Gallery from "./components/Gallery";
import Events from "./components/Events";
import "./App.css";
import LeaderBoard from "./components/LeaderBoard";

function App() {
  return (
    <>
      <HeroSection />
      <LeaderBoard leaderboard_image="dummy.jpg"/>
      <Events />
      <Gallery />
    </>
  );
}

export default App;
