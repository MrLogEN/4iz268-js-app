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

    public async Task InsertMaterialAsync(Material newMaterial)
    {
        newMaterial.IdMat = Guid.NewGuid().ToString();
        await _conext.Mats.AddAsync(newMaterial);
        await _conext.SaveChangesAsync();
    }
    public async Task<Material?> GetMaterialAsync(string id)
    {
        var result = await _conext.Mats.FindAsync(id);
        return result;
    }
    public async Task<IEnumerable<Material>> GetAllMaterialsAsync()
    {
        var result = await _conext.Mats.ToListAsync();
        return result;
    }
    public async Task<Material?> UpdateMaterialAsync(string id, Material updated)
    {
        var result = await _conext.Mats.FindAsync(id);
        if (result is null)
        {
            return null;
        }

        result.NameMat = updated.NameMat;
        result.DescMat = updated.DescMat;
        result.UnitMat = updated.UnitMat;
        result.Stocks = updated.Stocks;

        _conext.Mats.Entry(result).State = EntityState.Modified;
        await _conext.SaveChangesAsync();
        return result;
    }
    public async Task<Material?> DeleteMaterialAsync(string id)
    {
        var result = await _conext.Mats.FindAsync(id);
        if (result is null)
        {
            return null;
        }

        _conext.Mats.Remove(result);
        await _conext.SaveChangesAsync();
        return result;
    }
}