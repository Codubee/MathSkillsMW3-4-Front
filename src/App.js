import './App.css';
import Explanation from './components/Explanation';
// import LandingPage from './views/LandingPage';
// import NavBar from '../components/Navbar';
// import Features from './components/Features';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
      <Router>
        <div>
          {/* <NavBar/> */}
          <Switch>
            <Route path="/explanation">
              <Explanation/>
            </Route>
            <Route path="/features">
              {/* <Features /> */}
            </Route>
            <Route exact path="/">
              <div>
                Home
              </div>
            </Route>
          </Switch>
        </div>
      </Router>
  );
}
export default App;
