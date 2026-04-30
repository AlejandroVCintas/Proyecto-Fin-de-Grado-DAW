import { useEffect, useState } from "react";
import { getToday, getWeek } from "../frontservices/api";
import "./Stats.css";
import logo from "../assets/logo-tfg.png";

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

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

  const chartData = {
    labels: weekSteps.map((s) =>
      new Date(s.date).toLocaleDateString()
    ),
    datasets: [
      {
        label: "Pasos realizados esta semana",
        data: weekSteps.map((s) => s.steps),
        borderColor: "#4CAF50",
        backgroundColor: "rgba(76, 175, 80, 0.2)",
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="stats-page">
       <div className="header">
            <img src={logo} className="logo-inline" />
            <h1>Estadísticas</h1>
        </div>
      
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

      {/* GRÁFICA PASOS SEMANAL */}
      <div className="card">
        <h2>Gráfica semanal</h2>

        {weekSteps.length === 0 ? (
          <p>No hay datos para mostrar</p>
        ) : (
          <Line data={chartData} />
        )}
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