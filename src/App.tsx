import './App.css';
import {Routes, Route} from 'react-router-dom'
import { MainPage } from './components/mainPage/MainPage';
import { TrainCard } from './components/trainCard/TrainCard';
function App() {
  return (
    <div className="App">
      
      <Routes>
          <Route path='/' element={<MainPage/>}></Route>
          <Route path='/:id' element={<TrainCard/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
