import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Equipos from './pages/Equipos';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Equipos from './pages/Equipos';
import Login from './pages/Login';
import Navbar from './components/Navbar';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Equipos />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Equipos />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </Router>
  );
}
