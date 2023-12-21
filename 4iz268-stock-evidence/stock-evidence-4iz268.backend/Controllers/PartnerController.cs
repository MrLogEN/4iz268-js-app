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
}