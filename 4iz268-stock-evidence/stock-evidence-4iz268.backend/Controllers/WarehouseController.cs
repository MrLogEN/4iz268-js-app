using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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
        await _appDbContext.Wrhs.AddAsync(newWarehouse);
        await _appDbContext.SaveChangesAsync();
        return Ok();
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Warehouse>>> GetAllWarehouses()
    {
        var result = await _appDbContext.Wrhs.ToListAsync();
        return Ok(result);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Warehouse?>> GetWarehouse(string id)
    {
        var result = await _appDbContext.Wrhs.FindAsync(id);
        if (result is null)
        {
            return NotFound();
        }
        return Ok(result);
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