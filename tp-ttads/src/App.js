import './App.css';
import Inicio from './styled-components/Inicio/Inicio';
import Login from './styled-components/Login/Login';
import Player from './styled-components/Player/Player';
import Register from './styled-components/Register/Register';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player" element={<Player />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  </div>
  );
}

export default App;
