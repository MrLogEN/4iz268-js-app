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

    public async Task<Stock?> AddMaterialToWarehouse(Stock stock)
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
}