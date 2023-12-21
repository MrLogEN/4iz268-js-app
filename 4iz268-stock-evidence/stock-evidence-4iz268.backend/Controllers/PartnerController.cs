using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using stock_evidence.backend.Data;
using stock_evidence.backend.Models;

namespace stock_evidence.backend.Controllers;

[Route("api/[controller]")]
[ApiController]
public class PartnerController : ControllerBase
{
    public readonly AppDbContext _appDbContext;

    public PartnerController(AppDbContext appDbContext)
    {
        _appDbContext = appDbContext;
    }
    [HttpPost]
    public async Task<int> CreatePartner([FromBody]Partner newPartner)
    {
        newPartner.IdPart = Guid.NewGuid().ToString();
        await _appDbContext.AddAsync(newPartner);
        await _appDbContext.SaveChangesAsync();
        return StatusCodes.Status200OK;
    }

    [HttpGet]
    public async Task<IEnumerable<Partner>> GetAllPartners()
    {
        var result = await _appDbContext.Parts.ToListAsync();
        return result;
    }

    [HttpGet("{id}")]
    public async Task<Partner?> GetPartner(string id)
    {
        var result = await _appDbContext.Parts.FindAsync(id);
        return result;
    }

    [HttpPut]
    public async Task<int> UpdatePartner([FromBody] Partner updatedPartner)
    {
        var exists = await _appDbContext.Parts.FindAsync(updatedPartner.IdPart);
        if (exists is null)
        {
            return StatusCodes.Status404NotFound;
        }

        exists.NamePart = updatedPartner.NamePart;
        exists.TelPart = updatedPartner.TelPart;
        exists.StrtPart = updatedPartner.StrtPart;
        exists.Strt2Part = updatedPartner.Strt2Part;
        exists.Strt3Part = updatedPartner.Strt3Part;
        exists.CityPart = updatedPartner.CityPart;
        exists.PostPart = updatedPartner.PostPart;
        exists.StatePart = updatedPartner.StatePart;
        exists.Mats = updatedPartner.Mats;
        _appDbContext.Parts.Entry(exists).State = EntityState.Modified;
        await _appDbContext.SaveChangesAsync();
        return StatusCodes.Status200OK;
    }

    [HttpDelete("{id}")]
    public async Task<int> DeletePartner(string id)
    {
        var toDelete = await _appDbContext.Parts.FindAsync(id);
        if (toDelete is null)
        {
            return StatusCodes.Status404NotFound;
        }

        _appDbContext.Parts.Remove(toDelete);
        await _appDbContext.SaveChangesAsync();
        return StatusCodes.Status200OK;
    }
}