using System.ComponentModel.DataAnnotations;
public class User
{
    public int Id { get; set; }

    [Required]
    public string Name { get; set; }

    [Required]
    [EmailAddress]
    public string Email { get; set; }

    [Required]
    public string PasswordHash { get; set; }

    public DateTime RegisterDate { get; set; }
    public int Weight { get; set; }
    public int Height { get; set; }
    public List<Step> Steps { get; set; } = new List<Step>();
}