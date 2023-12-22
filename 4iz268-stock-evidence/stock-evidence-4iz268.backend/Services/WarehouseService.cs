using Microsoft.EntityFrameworkCore;
using stock_evidence.backend.Data;
using stock_evidence.backend.Models;

namespace stock_evidence.backend.Services;

public class WarehouseService
{
    private readonly EvidenceDbContext _conext;

    public WarehouseService(EvidenceDbContext conext)
    {
        _conext = conext;
    }

    public async Task InsertWarehouse(Warehouse newWarehouse)
    {
        newWarehouse.IdWrhs = Guid.NewGuid().ToString();
        await _conext.Wrhs.AddAsync(newWarehouse);
        await _conext.SaveChangesAsync();
    }
    public async Task<Warehouse?> GetWarehouse(string id)
    {
        var result = await _conext.Wrhs.FindAsync(id);
        return result;
    }
    public async Task<IEnumerable<Warehouse>> GetAllWarehouses()
    {
        var result = await _conext.Wrhs.ToListAsync();
        return result;
    }
    public async Task<Warehouse?> UpdateWarehouse(string id, Warehouse updated)
    {
        var result = await _conext.Wrhs.FindAsync(id);
        if (result is null)
        {
            return null;
        }

        result.NameWrhs = updated.NameWrhs;
        result.TelWrhs = updated.TelWrhs;
        result.StrtWrhs = updated.StrtWrhs;
        result.Strt2Wrhs = updated.Strt2Wrhs;
        result.Strt3Wrhs = updated.Strt3Wrhs;
        result.CityWrhs = updated.CityWrhs;
        result.PostWrhs = updated.PostWrhs;
        result.StateWrhs = updated.StateWrhs;
        
        _conext.Wrhs.Entry(result).State = EntityState.Modified;
        await _conext.SaveChangesAsync();
        return result;
    }
    public async Task<Warehouse?> DeleteWarehouse(string id)
    {
        var result = await _conext.Wrhs.FindAsync(id);
        if (result is null)
        {
            return null;
        }

        _conext.Wrhs.Remove(result);
        await _conext.SaveChangesAsync();
        return result;
    }
}