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
    public async Task<int> Create([FromBody] Material newMaterial)
    {
        newMaterial.IdMat = Guid.NewGuid().ToString();
        var mat = await _appDbContext.Mats.FindAsync(newMaterial.IdMat);
        if (mat is not null)
        {
            return StatusCodes.Status409Conflict;
        }
        await _appDbContext.Mats.AddAsync(newMaterial);
        await _appDbContext.SaveChangesAsync();
        return StatusCodes.Status200OK;
    }
    [HttpGet("{id}")]
    public async Task<Material?> GetMaterial(string id)
    {
        var result = await _appDbContext.Mats.FindAsync(id);
        return result;
    }
    [HttpGet]
    public async Task<IEnumerable<Material>> GetAllMaterials()
    {
        var result = await _appDbContext.Mats.ToListAsync();
        return result;
    }

    [HttpPut]
    public async Task<int> UpdateMaterial([FromBody] Material updatedMaterial)
    {
        var toUpdate = await _appDbContext.Mats.FindAsync(updatedMaterial.IdMat);
        if (toUpdate is null)
        {
            return StatusCodes.Status404NotFound;
        }

        toUpdate.Stocks = updatedMaterial.Stocks;
        toUpdate.IdPart = updatedMaterial.IdPart;
        toUpdate.DescMat = updatedMaterial.DescMat;
        toUpdate.NameMat = updatedMaterial.NameMat;
        toUpdate.IdPartNavigation = updatedMaterial.IdPartNavigation;
        toUpdate.UnitMat = updatedMaterial.UnitMat;
        
        _appDbContext.Entry(toUpdate).State = EntityState.Modified;
        await _appDbContext.SaveChangesAsync();
        return StatusCodes.Status200OK;
    }

    [HttpDelete("{id}")]
    public async Task<int> DeleteMaterial(string id)
    {
        var toDelete = await _appDbContext.Mats.FindAsync(id);
        if (toDelete is null)
        {
            return StatusCodes.Status404NotFound;
        }

        _appDbContext.Mats.Remove(toDelete);
        await _appDbContext.SaveChangesAsync();
        return StatusCodes.Status200OK;
    }
    
}