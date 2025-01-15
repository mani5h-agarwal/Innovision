
import "./LeaderBoard.css";


const LeaderBoard = ({leaderboard_image}) => {

  return (
    <div className="outer-leaderboard">
      <a className="title-leaderboard">LeaderBoard</a>
      <img src={leaderboard_image} alt="" className="leaderboard"/>
    </div>
  );
};

export default LeaderBoard;
