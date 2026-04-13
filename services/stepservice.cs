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
}