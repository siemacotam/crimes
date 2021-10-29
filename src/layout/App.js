import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import '../App.css';
import { createBrowserHistory } from "history";
import Home from '../components/Home/Home';
import Hero from '../components/Hero/Hero';
import Rob from '../components/Rob/Rob';
import Mafia from '../components/Mafia/Mafia';

const history = createBrowserHistory();

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL} history={history}>
        <Switch>
          <Route path="/" exact render={() => <Home />} />
          <Route path="/champ" exact render={() => <Hero />} />
          <Route path="/rob" exact render={() => <Rob />} />
          <Route path="/mafia" exact render={() => <Mafia />} />
          <Redirect to="/"></Redirect>
        </Switch>
    </Router>
  );
}

export default App;
