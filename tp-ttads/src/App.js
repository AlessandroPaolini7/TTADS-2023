import './App.css';
import Login from './styled-components/Login/Login';
import FormLogin from './styled-components/FormLogin/FormLogin';
import Player from './styled-components/Player/Player';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/formlogin" element={<FormLogin />} />
        <Route path="/player" element={<Player />} />
      </Routes>
    </Router>
  </div>
  );
}

export default App;
