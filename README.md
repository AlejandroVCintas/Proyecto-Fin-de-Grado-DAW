🏃‍♂️ StepItUp - Aplicación de seguimiento de pasos 🏃‍♂️

📌 Descripción

StepItUp es una aplicación web desarrollada como Proyecto Intermodular de Fin de Grado en el grado superior de DAW.
Su objetivo es permitir a los usuarios registrar, consultar y analizar su actividad física diaria mendiante el seguimiento de pasos.

La aplicación permite registrar los pasos diarios, visualizar estadísticas y gestionar objetivos y logros personales (futuras versiones).

🎯 Objetivos del proyecto

- Registrar pasos diarios.
- Consultar la actividad diaria, semanal y mensual.
- Gestionar metas de pasos.
- Obtener logros según los objetivos conseguidos con el fin de animar al usuario a seguir activo.
- Autenticar usuarios mediante un sistema de login.

🧱 Arquitectura del proyecto

La aplicación utilizar un arquitectura cliente - servidor, se han utilizado las siguientes herramientas para su desarrollo:

- Frontend: React (JavaScript)
- Backend: ASP.NET Core (C#)
- Base de datos: SQLite (Se pretendía usar MySQL/PostgreSQL pero debido a su dificultad se ha optado por una herramienta más simple)
- Comunicación entre partes: API REST

⚙ Tecnologías utilizadas

- Frontend
  React, 
  Vite,
  Axios,
  CSS.

- Backend
  ASP.NET Core,
  Entity Framework Core,
  SQLite,

📈 Funciones actuales

- CRUD de pasos
- Conexión frontend-backend
- endpoints básicos
- Interfaz con dos pantallas navegables

Futuras mejoras:
- Autenticación de usuario
- Sistema de logros
- Visualización de estadísticas
- Gráficos dinámicos
- Pantalla perfil, logros.

💻 Instalación y ejecución

- Backend
  dotnet run

Acceso a Swagger --> http://localhost:5030/swagger

- Frontend <br>
  cd frontend
  
  npm install
  
  npm run dev

Acceso a aplicación --> http://localhost:5173

🛢 Base de datos

Se ha utilziado SQLite como base de datos en local.

El modelo actual incluye:
- Registro de pasos
- Metas
- Usuarios

(Aunque todavía no se hace uso de las metas y los usuarios se han creado ya en la base de datos para su futuro uso)

👨‍💻 Proyecto creado por Alejandro Vargas Cintas - Grado Superior de Desarrollo de Aplicaciones Web en CESUR Málaga Este
