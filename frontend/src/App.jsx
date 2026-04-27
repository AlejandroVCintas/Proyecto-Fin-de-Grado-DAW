import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Stats from "./pages/Stats";
import Auth from "./pages/Auth";

function App() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <Link to="/home">Inicio</Link>
        <Link to="/stats">Estadísticas</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/stats" element={<Stats />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;