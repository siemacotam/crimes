import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import '../App.css';
import '../sass/style.sass'
import Home from '../components/Home/Home';
import Hero from '../components/Hero/Hero';
import Rob from '../components/Rob/Rob';
import Mafia from '../components/Mafia/Mafia';
import MainNav from './MainNav';


function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <MainNav />
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/hero" exact render={() => <Hero />} />
          <Route path="/rob" exact render={() => <Rob />} />
          <Route path="/mafia" exact render={() => <Mafia />} />
          <Redirect to="/"></Redirect>
        </Switch>
    </Router>
  );
}

export default App;
