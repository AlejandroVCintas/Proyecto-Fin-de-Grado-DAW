using System.Linq;
public class StepService
{
    // Conexión con base de datos
    private readonly AppDbContext _context;

    public StepService(AppDbContext context)
    {
        _context = context;
    }

    // Se devuelven los registros de pasos existentes
    public List<Step> GetAll()
    {
        return _context.Steps.ToList();
    }

    // Se añaden pasos
    public Step Add(Step step)
    {
        _context.Steps.Add(step);
        _context.SaveChanges();
        return step;
    }

    // Se elimina un registro de pasos existente
    public void Delete(int id)
    {
        var step = _context.Steps.Find(id);

        // Si el registro no existe se vuelve
        if (step == null) return;

        _context.Steps.Remove(step);
        _context.SaveChanges();
    }

    public Step? Update(int id, Step updatedStep)
    {
        var step = _context.Steps.Find(id);

        // Si no hay datos no se devuelve nada
        if (step == null) return null;

        // Se actualizan los campos necesarios
        step.Date = updatedStep.Date;
        step.Steps = updatedStep.Steps;
        step.UserId = updatedStep.UserId;

        _context.SaveChanges();
        return step;
    }

    public List<Step> GetToday()
    {
        var today = DateTime.Today;

        // Se devuelven los pasos con la fecha de hoy
        return _context.Steps
        .Where(s => s.Date.Date == today)
        .ToList();
    }

    public List<Step> GetWeek()
    {
        var weekAgo = DateTime.Today.AddDays(-7);

        return _context.Steps
            .Where(s => s.Date >= weekAgo)
            .ToList();
    }
}