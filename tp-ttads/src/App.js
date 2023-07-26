import './App.css';
import Login from './Components/Login/Login';
import FormLogin from './Components/FormLogin/FormLogin';
import Player from './Components/Player/Player';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/formlogin" element={<FormLogin />} />
      </Routes>
    </Router>
  </div>
  );
}

export default App;
