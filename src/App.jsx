import './App.css';
import Board from './components/board/board';

function App() {
  return <div className="AppContainer">
    <div className='AppContent'>
      <h1>Connect <span>4</span></h1>
      <Board />
    </div>
  </div>
}

export default App;
