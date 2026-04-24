import { useEffect, useState } from "react";
import { getSteps, addStep } from "../frontservices/api";
import { deleteStep } from "../frontservices/api";
import "./Home.css";

function Home() {

// Se crean las constantes que se guardarán en el formulario
  const [steps, setSteps] = useState([]);
  
// Formulario mejorado para poder agrupar y añadir datos de manera más cómoda
  const [form, setForm] = useState({
    date: "",
    steps: ""
  });

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
    if (!form.date || !form.steps) {
      alert("Los datos introducidos no son correctos");
      return;
    }

    await addStep({
      date: form.date,
      steps: parseInt(form.steps),
    });

  // Se limpia el formulario y se actualiza la lista de pasos
    setForm({date: "", steps: ""});
    fetchSteps();
    };

  // Opción eliminar registro de pasos
    const handleDelete = async (id) => {
      await deleteStep(id);
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
            value={form.date}
            onChange={(e) => setForm({...form, date: e.target.value})} 
          />

          <input
            type="number"
            placeholder="Número de pasos"
            value={form.steps}
            onChange={(e) => setForm({...form, steps: e.target.value})}
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
          <ul>
            {steps.map((s) => (
              <li key={s.id}>
                <strong>
                  {new Date(s.date).toLocaleDateString()}
                </strong>{" "}
                - {s.steps} pasos

                <button onClick={() => handleDelete(s.id)}>
                  Eliminar
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Home;