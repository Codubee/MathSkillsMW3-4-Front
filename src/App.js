import './App.css';

import Explanation from './components/Explanation';
//import LandingPage from './views/LandingPage';
import Navigation from './components/Navigation';
import Features from './components/Features';
import Team from './components/Team'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
      <Router>
        <div>
          <Navigation/>
          <Switch>
            <Route path="/study">
              <div>
                This is the main application page, <br/>
                to be added to the site soon.
              </div>
            </Route>
            <Route path="/team">
              <Team />
            </Route>
            <Route path="/github" component={() => {
              window.location.href = "https://github.com/Codubee/MathSkillsMW3-4-Front";
              return null;
            }}/>
            <Route exact path="/">
              <Explanation/>
              <Features />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}
export default App;
