using Microsoft.AspNetCore.Mvc;
using System.Linq;

[ApiController]
[Route("api/auth")]
public class AuthController : ControllerBase
{
    // Contexto de la base de datos para poder hacer uso de la tabla Users
    private readonly AppDbContext _context;

    public AuthController(AppDbContext context)
    {
        _context = context;
    }

    // Registro de usuario en la base de datos
    [HttpPost("register")]
    public IActionResult Register(User user)
    {
        // Se añaden los datos del usuario a la base de datos y se guardan los cambios
        _context.Users.Add(user);
        _context.SaveChanges();
        return Ok(user);
    }

    // Login de usuario ya creado 
    [HttpPost("login")]
    public IActionResult Login(LoginDto login)
    {
        // El usuario introducido debe coincidir con uno ya creado en la base de datos
        var user = _context.Users
            .FirstOrDefault(u => u.Email == login.Email && u.PasswordHash == login.PasswordHash);

        // En caso de que no se introduzca el usuario correctamente se devolverá un error
        if (user == null)
            return Unauthorized();

        return Ok(user);
    }
}