using Microsoft.EntityFrameworkCore;
using stock_evidence.backend.Data;
using stock_evidence.backend.Models;

namespace stock_evidence.backend.Services;

public class StockService
{
    private readonly EvidenceDbContext _context;

    public StockService(EvidenceDbContext context)
    {
        _context = context;
    }

    public async Task<Stock?> AddMaterialToWarehouseAsync(Stock stock)
    {
        var alreadyExists = await _context.Stocks.FindAsync([stock.IdMat, stock.IdWrhs]);
        if (alreadyExists is not null)
        {
            return null;
        }

        await _context.Stocks.AddAsync(stock);
        await _context.SaveChangesAsync();
        return stock;
    }

    public async Task<Stock?> RemoveMaterialFromWarehouseAsync(string materialId, string warehouseId)
    {
        var result = await _context.Stocks.FindAsync([materialId, warehouseId]);
        if (result is null)
        {
            return null;
        }

        _context.Stocks.Remove(result);
        await _context.SaveChangesAsync();
        return result;
    }

    public async Task<Stock?> ChangeMaterialQuantityInWarehouseAsync(string materialId, string warehouseId, double quantity)
    {
        var result = await _context.Stocks.FindAsync([materialId, warehouseId]);
        if (result is null)
        {
            return null;
        }

        result.QuantStock = quantity;
        _context.Stocks.Entry(result).State = EntityState.Modified;
        await _context.SaveChangesAsync();
        return result;
    }

    public async Task<IEnumerable<Stock>> GetAllMaterialStocksAsync(string materialId)
    {
        var result = await _context.Stocks.Where(s => s.IdMat == materialId).ToListAsync();
        return result;
    }
    public async Task<IEnumerable<Stock>> GetAllStocksFromWarehouseAsync(string warehouseId)
    {
        var result = await _context.Stocks.Where(s => s.IdWrhs == warehouseId).ToListAsync();
        return result;
    }
}