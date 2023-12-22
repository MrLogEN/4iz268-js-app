using System.Runtime.CompilerServices;
using Microsoft.AspNetCore.Mvc;
using stock_evidence.backend.Models;
using stock_evidence.backend.Services;

namespace stock_evidence.backend.Controllers;

[Route("api/[controller]")]
[ApiController]
public class StockController : ControllerBase
{
    private readonly StockService _stockService;

    public StockController(StockService stockService)
    {
        _stockService = stockService;
    }

    [HttpPost]
    public async Task<IActionResult> CreateStockAsync([FromBody] Stock stock)
    {
        throw new NotImplementedException();
    }

    [HttpDelete]
    public async Task<IActionResult> RemoveStockAsync([FromBody] Stock stock)
    {
        throw new NotImplementedException();
    }
    [HttpPut]
    public async Task<IActionResult> ChangeQuantityStockAsync([FromBody] Stock stock)
    {
        throw new NotImplementedException();
    }
    [HttpGet("material/{id}")]
    public async Task<IActionResult> GetAllStockByMaterialAsync(string id)
    {
        throw new NotImplementedException();
    }
    [HttpGet("warehouse/{id}")]
    public async Task<IActionResult> GetAllStockByWarehouseAsync(string id)
    {
        throw new NotImplementedException();
    }
}