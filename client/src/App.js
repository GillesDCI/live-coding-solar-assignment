import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import SatellitePage from './pages/SatellitePage';
import PlanetPage from './pages/PlanetPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<h1>Welcome to the solar system</h1> }/>
            <Route path="/home" element={<Navigate  to="/"  />}/>

            <Route path="/satellites" element={<SatellitePage />}/>
            <Route path="/planets" element={<PlanetPage />}/>


          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
