import { useEffect, useState } from "react";
import { getToday, getWeek } from "../services/api";
import "./Stats.css";

function Stats() {
  const [todaySteps, setTodaySteps] = useState(0);
  const [weekSteps, setWeekSteps] = useState([]);

  useEffect(() => {
    loadStats();
  }, []);

  // Se cargan los pasos registrados
  const loadStats = async () => {
    const today = await getToday();
    const week = await getWeek();

  // Total de pasos del día
    const totalToday = today.reduce((acc, s) => acc + s.steps, 0);

    setTodaySteps(totalToday);
    setWeekSteps(week);
  };
  // Total de pasos semanal
  const totalWeek = weekSteps.reduce((acc, s) => acc + s.steps, 0);

  return (
    <div className="stats-page">
      <h1>Estadísticas</h1>

      {/* TARJETA PASOS DIARIO */}
      <div className="card">
        <h2>Pasos de hoy</h2>
        <p className="big-number">{todaySteps}</p>
      </div>

      {/* TARJETA PASOS SEMANAL */}
      <div className="card">
        <h2>Total semanal</h2>
        <p className="big-number">{totalWeek}</p>
      </div>

      {/* LISTA PASOS SEMANAL */}
      <div className="card">
        <h2>Informe semanal</h2>

        {weekSteps.length === 0 ? (
          <p>No hay datos que mostrar</p>
        ) : (
          <ul>
            {weekSteps.map((s) => (
              <li key={s.id}>
                {new Date(s.date).toLocaleDateString()} → {s.steps} pasos
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Stats;