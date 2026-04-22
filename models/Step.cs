using System.Text.Json.Serialization;
using System.ComponentModel.DataAnnotations;
public class Step
{
    public int Id { get; set; }

    [Required]
    public DateTime Date { get; set; }

    [Range(1, 100000)]
    public int Steps { get; set; }
    public int? UserId { get; set; }

    [JsonIgnore]
    public User? User { get; set; }
}