using System.Text.Json.Serialization;
public class Step
{
    public int? Id { get; set; }
    public string Date { get; set; }
    public int Steps { get; set; }
    public int? UserId { get; set; }

    [JsonIgnore]
    public User? User { get; set; }
}