import { BrowserRouter, Routes, Route, useLocation, NavLink } from "react-router-dom";
import Home from "./pages/Home";
import Stats from "./pages/Stats";
import Auth from "./pages/Auth";

function Layout() {
  const location = useLocation();
  const hideNavbar = location.pathname === "/";

  return (
    <>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<Home />} />
        <Route path="/stats" element={<Stats />} />
      </Routes>

      {!hideNavbar && (
        <nav className="navbar">
          <NavLink to="/home">🏠</NavLink>
          <NavLink to="/stats">📊</NavLink>
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