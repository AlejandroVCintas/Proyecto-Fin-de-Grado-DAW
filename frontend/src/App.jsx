import { BrowserRouter, Routes, Route, useLocation, NavLink, useNavigate } from "react-router-dom";
import logo from "./assets/logo-tfg.png";
import Home from "./pages/Home";
import Stats from "./pages/Stats";
import Auth from "./pages/Auth";

function Layout() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/";
  const hideHeader = location.pathname === "/";

  const navigate = useNavigate();
  const isAuth = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };


    return (
    <>
      <div className="card-container">
      
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/home" element={isAuth ? <Home /> : <Auth />} />
          <Route path="/stats" element={isAuth ? <Stats /> : <Auth />} />
        </Routes>

      </div>

      {!hideNavbar && (
        <nav className="navbar">
          <NavLink to="/home">🏠Inicio</NavLink>
          <NavLink to="/stats">📊Estadísticas</NavLink>

         <button onClick={handleLogout} className="logout-btn">
            🚪Salir
          </button>
        </nav>
      )}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Layout />
      </div>
    </BrowserRouter>
  );
}

export default App;