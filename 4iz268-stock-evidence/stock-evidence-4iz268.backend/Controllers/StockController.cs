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
        var result = await _stockService.AddMaterialToWarehouseAsync(stock);
        if (result is null)
        {
            return Conflict();
        }

        return Ok(result);
    }

    [HttpDelete]
    public async Task<IActionResult> RemoveStockAsync([FromBody] Stock stock)
    {
        var result = await _stockService.RemoveMaterialFromWarehouseAsync(stock.IdMat, stock.IdWrhs);
        if (result is null)
        {
            return NotFound();
        }

        return Ok();
    }
    [HttpPut]
    public async Task<IActionResult> ChangeQuantityStockAsync([FromBody] Stock stock)
    {
        var result = await _stockService
                .ChangeMaterialQuantityInWarehouseAsync(stock.IdMat, stock.IdWrhs, stock.QuantStock);
        if (result is null)
        {
            return NotFound();
        }

        return Ok();
    }
    [HttpGet("material/{id}")]
    public async Task<ActionResult<IEnumerable<Stock>>> GetAllStockByMaterialAsync(string id)
    {
        var result = await _stockService.GetAllMaterialStocksAsync(id);
        return Ok(result);
    }
    [HttpGet("warehouse/{id}")]
    public async Task<IActionResult> GetAllStockByWarehouseAsync(string id)
    {
        throw new NotImplementedException();
    }
}