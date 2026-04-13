using Microsoft.EntityFrameworkCore;

// Contenido de la base de datos
public class AppDbContext : DbContext
{
    public DbSet<Step> Steps { get; set; }
    public DbSet<User> Users { get; set; }
    public DbSet<Goal> Goals { get; set; }

    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options) { }
}