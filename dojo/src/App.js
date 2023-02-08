import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';

function App() {
  return (
    <div className="App">
      <div className="content">
        <Navbar />
        <About />
      </div> 
    </div>
  );
}

export default App;
