import { useState } from "react";
import { login, register } from "../frontservices/api";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

function Auth() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      if (isLogin) {
        // Login de usuario
        await login({
          email: form.email,
          passwordHash: form.password,
        });
        alert("Login correcto");
        // Se redirige al usuario directamente a la pestaña Inicio
        localStorage.setItem("token", res.token);
        navigate("/home");
      } else {
        // Registro de usuario
        await register({
          name: form.name,
          email: form.email,
          passwordHash: form.password,
          registerDate: new Date().toISOString(),
          weight: 0,
          height: 0,
        });
        alert("Usuario creado");

        setIsLogin(true);
      }
    } catch {
      alert("Error en autenticación");
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1>{isLogin ? "Login" : "Registro"}</h1>

        {/* Campo para nombre de usuario */}
        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <input
              type="text"
              placeholder="Nombre"
              value={form.name}
              onChange={(e) =>
                setForm({ ...form, name: e.target.value })
              }
            />
          )}

        {/* Campo para el email */}
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />

        {/* Campo para la contraseña */}
          <input
            type="password"
            placeholder="Contraseña"
            value={form.password}
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />

        {/* Botón de Login/Registro */}
          <button className="btn-primary">
            {isLogin ? "Entrar" : "Registrarse"}
          </button>
        </form>

        <p onClick={() => setIsLogin(!isLogin)} className="toggle">
          {isLogin
            ? "¿No tienes cuenta? Regístrate"
            : "¿Ya tienes cuenta? Login"}
        </p>
      </div>
    </div>
  );
}

export default Auth;