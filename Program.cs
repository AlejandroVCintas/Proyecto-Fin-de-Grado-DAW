using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Se activan los controladores y se realiza la conexión con SQLite
builder.Services.AddControllers();

builder.Services.AddScoped<StepService>();

builder.Services.AddDbContext<AppDbContext>(options =>
    options.UseSqlite("Data Source=steps.db"));


// Se crea la interfaz para poder probar la API
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Se activa la API y las reglas necesarias 
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAll", policy =>
        policy.AllowAnyOrigin()
              .AllowAnyMethod()
              .AllowAnyHeader());
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseCors("AllowAll");

app.MapControllers();

app.Run();