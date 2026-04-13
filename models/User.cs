public class User
{
    public int Id { get; set; }
    public string Name { get; set; }
    public string Email { get; set; }
    public string PasswordHash { get; set; }
    public DateTime RegisterDate { get; set; }
    public int Weight { get; set; }
    public int Height { get; set; }
    public List<Step> Steps { get; set; }
}