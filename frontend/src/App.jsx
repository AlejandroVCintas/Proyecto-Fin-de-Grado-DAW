import { useState } from "react";
import Home from "./pages/Home";
import Stats from "./pages/Stats";

function App() {
  const [currentpage, setPage] = useState("home");

  return (
    <div>
      <nav style={{ padding: 10 }}>
        <button onClick={() => setPage("home")}>Inicio</button>
        <button onClick={() => setPage("stats")}>Estadísticas</button>
      </nav>

      {currentpage === "home" && <Home />}
      {currentpage === "stats" && <Stats />}
    </div>
  );
}

export default App;