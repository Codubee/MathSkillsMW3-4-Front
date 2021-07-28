import './App.css';

import Explanation from './components/Explanation';
//import LandingPage from './views/LandingPage';
import Navigation from './components/Navigation';
import Features from './components/Features';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
      <Router>
        <div>
          <Navigation/>
          <Switch>
            <Route path="/explanation">
              <Explanation/>
            </Route>
            <Route path="/features">
              <Features />
            </Route>
            <Route exact path="/">
              <div>
                This is the home page (test html)
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
  );
}
export default App;
