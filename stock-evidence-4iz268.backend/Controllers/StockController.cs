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
    public async Task<IActionResult> CreateStockAsync([FromBody] StockDto stock)
    {
        var result = await _stockService.AddMaterialToWarehouseAsync(stock);
        if (result is null)
        {
            return Conflict();
        }

        return Ok(result);
    }

    [HttpDelete]
    public async Task<IActionResult> RemoveStockAsync([FromBody] StockDtoIds stock)
    {
        var result = await _stockService.RemoveMaterialFromWarehouseAsync(stock.MaterialId, stock.WarehouseId);
        if (result is null)
        {
            return NotFound();
        }

        return Ok();
    }
    [HttpPut]
    public async Task<IActionResult> ChangeQuantityStockAsync([FromBody] StockDto stock)
    {
        var result = await _stockService
                .ChangeMaterialQuantityInWarehouseAsync(stock.MaterialId, stock.WarehouseId, stock.Quantity);
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
    public async Task<ActionResult<IEnumerable<Stock>>> GetAllStockByWarehouseAsync(string id)
    {
        var result = await _stockService.GetAllStocksFromWarehouseAsync(id);
        return Ok(result);
    }

    [HttpGet("experimental/warehouse/{id}")]
    public async Task<ActionResult<IEnumerable<MaterialStockDto>>> GetAllWarehouseMaterials(string id)
    {
        var result = await _stockService.GetWarehousesMaterials(id);
        return Ok(result);
    }

    [HttpGet("experimental/material/{id}")]
    public async Task<ActionResult<IEnumerable<WarehouseStockDto>>> GetAllMaterialsWarehouses(string id)
    {
        var result = await _stockService.GetMaterialsWarehouses(id);
        return Ok(result);
    }
}