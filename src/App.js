import './App.css';
import LandingPage from './views/LandingPage';
import Navigation from './components/Navigation';
import Team from './components/Team'
import Tools from './components/Tools'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Math from './views/Math';

function App() {
  return (
      <Router>
        <div>
          <Navigation/>
          <Switch>
            <Route path="/study">
              <Math/>
            </Route>
            <Route path="/about">
              <Team />
              <Tools/>
            </Route>
            <Route exact path="/">
              <LandingPage/>
            </Route>
          </Switch>
        </div>
      </Router>
  );
}
export default App;
