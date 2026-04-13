import { useEffect, useState } from "react";
import { getSteps, addStep } from "../services/api";
import "./Home.css";

function Home() {

// Se crean las constantes que se guardarán en el formulario
  const [steps, setSteps] = useState([]);
  const [date, setDate] = useState("");
  const [count, setCount] = useState("");

  // Se llama al backend para recibir la lista de pasos
  const fetchSteps = async () => {
    const data = await getSteps();
    setSteps(data);
  };

  // Solo se ejecuta al cargar el sitio web
  useEffect(() => {
    fetchSteps();
  }, []);

  // Se evita que el formulario recargue la página
  const handleSubmit = async (e) => {
    e.preventDefault();

  // Se comprueba que los datos no estén vacíos
    if (!date || !count) return;

    await addStep({
      date,
      steps: parseInt(count),
      userId: 1
    });

  // Se limpia el formulario y se actualiza la lista de pasos
    setDate("");
    setCount("");
    fetchSteps();
  };

  return (
    <div className="home-page">
      <h1>Inicio</h1>

      {/* FORMULARIO PASOS */}
      <div className="card">
        <form className="form" onSubmit={handleSubmit}>
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />

          <input
            type="number"
            placeholder="Número de pasos"
            value={count}
            onChange={(e) => setCount(e.target.value)}
          />

          <button className="btn-primary">Añadir</button>
        </form>
      </div>

      {/* LISTA PASOS */}
      <div className="steps-list">
        <h2>Registros</h2>
        {steps.length === 0 ? (
          /* Si no hay ningún registro se muestra el mensaje en pantalla */
          <p>Aún no existe ningún registro de pasos</p>
        ) : (
          <ul className="steps-list">
            {steps.map((s) => (
              <li key={s.id}>
                <strong>{s.date}</strong> - {s.steps} pasos
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Home;