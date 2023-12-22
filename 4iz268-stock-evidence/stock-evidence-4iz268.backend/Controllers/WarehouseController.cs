using Microsoft.AspNetCore.Mvc;
using stock_evidence.backend.Data;
using stock_evidence.backend.Models;

namespace stock_evidence.backend.Controllers;

[Route("api/[controller]")]
[ApiController]
public class WarehouseController : ControllerBase
{
    private readonly AppDbContext _appDbContext;

    public WarehouseController(AppDbContext appDbContext)
    {
        _appDbContext = appDbContext;
    }

    [HttpPost]
    public async Task<IActionResult> CreateWarehouse([FromBody] Warehouse newWarehouse)
    {
        throw new NotImplementedException();
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Warehouse>>> GetAllWarehouses()
    {
        throw new NotImplementedException();
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Warehouse?>> GetWarehouse(string id)
    {
        throw new NotImplementedException();
    }

    [HttpPut]
    public async Task<IActionResult> UpdateWarehouse([FromBody] Warehouse updatedWarehouse)
    {
        throw new NotImplementedException();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteWarehouse(string id)
    {
        throw new NotImplementedException();
    }
}