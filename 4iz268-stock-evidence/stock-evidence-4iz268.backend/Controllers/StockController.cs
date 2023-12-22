using System.Runtime.CompilerServices;
using Microsoft.AspNetCore.Mvc;
using stock_evidence.backend.Data;
using stock_evidence.backend.Models;

namespace stock_evidence.backend.Controllers;

public class StockController
{
    private readonly AppDbContext _appDbContext;

    public StockController(AppDbContext appDbContext)
    {
        _appDbContext = appDbContext;
    }
    //
    // [HttpGet]
    // public async Task<Stock?>
    // [HttpGet("{id}")]
    // [HttpPost]
    // [HttpDelete("{id}")]
}