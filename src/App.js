import './App.css';

import Explanation from './components/Explanation';
import LandingPage from './views/LandingPage';
import NavBar from '../components/Navbar';
import Features from './components/Features';

function App() {
  return (
      <div>
        <NavBar/>
        <Features />
        <LandingPage />
      </div>
  );
}

export default App;
