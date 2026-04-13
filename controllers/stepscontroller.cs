using Microsoft.AspNetCore.Mvc;

[ApiController]
[Route("api/[controller]")]
public class StepsController : ControllerBase
{
    private readonly StepService _service;

    public StepsController(StepService service)
    {
        _service = service;
    }

    // Se devuelven todos los datos.
    [HttpGet]
    public IActionResult Get()
    {
        return Ok(_service.GetAll());
    }

    // Se reciben datos del frontend y se guardan como registro
    [HttpPost]
    public IActionResult Post(Step step)
    {
        return Ok(_service.Add(step));
    }

    // Se eliminan datos existentes según su id (se usará para usuarios también en versiones futuras)
    [HttpDelete("{id}")]
    public IActionResult Delete(int id)
    {
        _service.Delete(id);
        return NoContent();
    }
}