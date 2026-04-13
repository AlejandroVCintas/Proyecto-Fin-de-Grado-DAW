public class Goal
{
    public int Id { get; set; }
    public int StepsObjective { get; set; }
    public int UserId { get; set; }
    public User User { get; set; }
}