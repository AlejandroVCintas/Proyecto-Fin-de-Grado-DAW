export default function StepList({ steps, onDelete }) {
  return (
    <ul>
      {steps.map((s) => (
        <li key={s.id}>
          {new Date(s.date).toLocaleDateString()} - {s.steps} pasos
          <button onClick={() => onDelete(s.id)}>Eliminar</button>
        </li>
      ))}
    </ul>
  );
}