import './App.css';
import Explanation from './components/Explanation';
import LandingPage from './views/LandingPage';
import Math from './views/Math';
import Navigation from './components/Navigation';

function App() {
  return (
      <div>
        <Navigation/>
        <LandingPage />
        <Math/>
      </div>
  );
}

export default App;
