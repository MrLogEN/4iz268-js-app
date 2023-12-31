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
    public async Task<IActionResult> CreateWarehouseAsync([FromBody] Warehouse warehouse)
    {
        await _warehouseService.InsertWarehouseAsync(warehouse);
        return Ok();
    }
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Warehouse>>> GetAllWarehousesAsync()
    {
        var result = await _warehouseService.GetAllWarehousesAsync();
        return Ok(result);
    }
    [HttpGet("{id}")]
    public async Task<ActionResult<Warehouse?>> GetWarehouseAsync(string id)
    {
        var result = await _warehouseService.GetWarehouseAsync(id);
        if (result is null)
        {
            return NotFound();
        }
        return Ok(result);
    }
    [HttpPut("{id}")]
    public async Task<ActionResult<Warehouse?>> UpdateWarehouseAsync(string id, [FromBody] Warehouse warehouse)
    {
        var result = await _warehouseService.UpdateWarehouseAsync(id, warehouse);
        if (result is null)
        {
            return NotFound();
        }

        return Ok(result);
    }
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteWarehouseAsync(string id)
    {
        var result = await _warehouseService.DeleteWarehouseAsync(id);
        if (result is null)
        {
            return NotFound();
        }
        return Ok();
    }
}
