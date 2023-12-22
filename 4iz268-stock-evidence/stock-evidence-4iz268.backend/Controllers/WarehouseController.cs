using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore.Query.Internal;
using stock_evidence.backend.Models;
using stock_evidence.backend.Services;

namespace stock_evidence.backend.Controllers;

[Route("api/[controller]")]
[ApiController]
public class WarehouseController : ControllerBase
{
    private readonly WarehouseService _warehouseService;

    public WarehouseController(WarehouseService warehouseService)
    {
        _warehouseService = warehouseService;
    }

    [HttpPost]
    public async Task<IActionResult> CreateWarehouse([FromBody] Warehouse warehouse)
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
    [HttpPut("{id}")]
    public async Task<ActionResult<Warehouse?>> UpdateWarehouse(string id, [FromBody] Warehouse warehouse)
    {
        throw new NotImplementedException();
    }
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteWarehouse(string id)
    {
        throw new NotImplementedException();
    }
}
