using Microsoft.AspNetCore.Mvc;
using System.Linq;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.Text;


[ApiController]
[Route("api/auth")]
public class AuthController : ControllerBase
{
    // Contexto de la base de datos para poder hacer uso de la tabla Users
    private readonly AppDbContext _context;
    private readonly IConfiguration _config;

    public AuthController(AppDbContext context, IConfiguration config)
    {
        _context = context;
        _config = config;
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

        var keyString = _config.GetValue<string>("Jwt:Key");

        if (string.IsNullOrEmpty(keyString))
            return StatusCode(500, "JWT Key no encontrada");

        var key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(keyString));

        var creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);

        var claims = new[]
        {
            new Claim(ClaimTypes.Name, user.Email),
            new Claim("userId", user.Id.ToString())
        };

        var token = new JwtSecurityToken(
            claims: claims,
            expires: DateTime.Now.AddHours(2),
            signingCredentials: creds
        );

        var jwt = new JwtSecurityTokenHandler().WriteToken(token);

        return Ok(new { token = jwt });
    }
}