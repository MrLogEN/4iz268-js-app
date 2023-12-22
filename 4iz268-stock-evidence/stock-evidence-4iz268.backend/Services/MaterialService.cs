using System.Data;
using System.Numerics;
using Microsoft.EntityFrameworkCore;
using stock_evidence.backend.Data;
using stock_evidence.backend.Models;

namespace stock_evidence.backend.Services;

public class MaterialService
{
    private readonly EvidenceDbContext _conext;

    public MaterialService(EvidenceDbContext conext)
    {
        _conext = conext;
    }

    public async Task InsertMaterial(Material newMaterial)
    {
        newMaterial.IdMat = Guid.NewGuid().ToString();
        await _conext.Mats.AddAsync(newMaterial);
        await _conext.SaveChangesAsync();
    }
    public async Task<Material?> GetMaterial(string id)
    {
        var result = await _conext.Mats.FindAsync(id);
        return result;
    }
    public async Task<IEnumerable<Material>> GetAllMaterial()
    {
        throw new NotImplementedException();
    }
    public async Task<Material?> UpdateMaterial(Material updated)
    {
        throw new NotImplementedException();
    }
    public async Task<Material?> DeleteMaterial(string id)
    {
        throw new NotImplementedException();
    }
}