import './App.css';
import LandingPage from './views/LandingPage';
import Navigation from './components/Navigation';
import Team from './components/Team'
import Tools from './components/Tools'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import MathPage from './views/MathPage';

function App() {
  return (
      <Router>
        <div>
          <Navigation/>
          <Switch>
            <Route path="/study">
              <MathPage/>
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
