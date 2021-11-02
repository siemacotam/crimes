import Competition from "./Competition";
import LoginPanel from "./LoginPanel";
import StatsPanel from "./StatsPanel";
import TopPlayers from "./TopPlayers";
import WelcomePanel from "./WelcomePanel";

const Home = () => {
  return (
    <div className="home">
      <div className="home__left-panel">
        <WelcomePanel />
        <Competition />
      </div>
      <div className="home__right-panel">
        <LoginPanel />
        <StatsPanel />
        <TopPlayers />
      </div>
    </div>
  );
};

export default Home;
