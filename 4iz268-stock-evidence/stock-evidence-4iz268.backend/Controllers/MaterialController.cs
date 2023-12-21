using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using stock_evidence.backend.Data;
using stock_evidence.backend.Models;

namespace stock_evidence.backend.Controllers;
[Route("api/[controller]")]
[ApiController]
public class MaterialController : ControllerBase
{
    private readonly AppDbContext _appDbContext;

    public MaterialController(AppDbContext appDbContext)
    {
        _appDbContext = appDbContext;
    }
    [HttpPost]
    public async Task<IActionResult> Create([FromBody] Material newMaterial)
    {
        newMaterial.IdMat = Guid.NewGuid().ToString();
        var mat = await _appDbContext.Mats.FindAsync(newMaterial.IdMat);
        if (mat is not null)
        {
            return Conflict();
        }
        await _appDbContext.Mats.AddAsync(newMaterial);
        await _appDbContext.SaveChangesAsync();
        return Ok();
    }
    [HttpGet("{id}")]
    public async Task<ActionResult<Material?>> GetMaterial(string id)
    {
        var result = await _appDbContext.Mats.FindAsync(id);
        return Ok(result);
    }
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Material>>> GetAllMaterials()
    {
        var result = await _appDbContext.Mats.ToListAsync();
        return Ok(result);
    }

    [HttpPut]
    public async Task<IActionResult> UpdateMaterial([FromBody] Material updatedMaterial)
    {
        var toUpdate = await _appDbContext.Mats.FindAsync(updatedMaterial.IdMat);
        if (toUpdate is null)
        {
            return NotFound();
        }

        toUpdate.Stocks = updatedMaterial.Stocks;
        toUpdate.IdPart = updatedMaterial.IdPart;
        toUpdate.DescMat = updatedMaterial.DescMat;
        toUpdate.NameMat = updatedMaterial.NameMat;
        toUpdate.IdPartNavigation = updatedMaterial.IdPartNavigation;
        toUpdate.UnitMat = updatedMaterial.UnitMat;
        
        _appDbContext.Entry(toUpdate).State = EntityState.Modified;
        await _appDbContext.SaveChangesAsync();
        return Ok();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteMaterial(string id)
    {
        var toDelete = await _appDbContext.Mats.FindAsync(id);
        if (toDelete is null)
        {
            return NotFound();
        }

        _appDbContext.Mats.Remove(toDelete);
        await _appDbContext.SaveChangesAsync();
        return Ok();
    }
    
}