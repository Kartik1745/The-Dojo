import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Home from './components/Blog';

function App() {
  return (
    <div className="App">
      <div className="content">
        <Navbar />
        <About />
        <Home />
      </div> 
    </div>
  );
}

export default App;
