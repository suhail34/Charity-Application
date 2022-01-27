import Mainlayout from './layouts/Mainlayout';
import About from './pages/About.js';
import Donation from './pages/Donation.js';
import Login from './pages/Login.js';
import Register from './pages/Register.js';
import Home from './pages/Home.js';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

function App() {

  return (
      <Router>
        <div>
          <Mainlayout/>
          <div>
            <Routes>
              <Route path="/about" element={<About/>} />
              <Route path="/donation" element={<Donation/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/register" element={<Register/>} />
              <Route path="/" element={<Home/>} />
            </Routes>
          </div>
        </div>
      </Router>
  );
}

export default App;
