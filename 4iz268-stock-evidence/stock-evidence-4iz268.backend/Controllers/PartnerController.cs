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
    public async Task<IActionResult> CreatePartner([FromBody]Partner newPartner)
    {
        newPartner.IdPart = Guid.NewGuid().ToString();
        await _appDbContext.AddAsync(newPartner);
        await _appDbContext.SaveChangesAsync();
        return Ok();
    }

    [HttpGet]
    public async Task<ActionResult<IEnumerable<Partner>>> GetAllPartners()
    {
        var result = await _appDbContext.Parts.ToListAsync();
        return Ok(result);
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<Partner?>> GetPartner(string id)
    {
        var result = await _appDbContext.Parts.FindAsync(id);
        return Ok(result);
    }

    [HttpPut]
    public async Task<IActionResult> UpdatePartner([FromBody] Partner updatedPartner)
    {
        var exists = await _appDbContext.Parts.FindAsync(updatedPartner.IdPart);
        if (exists is null)
        {
            return NotFound();
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
        return Ok();
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult DeletePartner(string id)
    {
        var toDelete = await _appDbContext.Parts.FindAsync(id);
        if (toDelete is null)
        {
            return NotFound();
        }

        _appDbContext.Parts.Remove(toDelete);
        await _appDbContext.SaveChangesAsync();
        return Ok();
    }
}