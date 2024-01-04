using System.Diagnostics.Contracts;
using Microsoft.AspNetCore.Mvc;
using stock_evidence.backend.Models;
using stock_evidence.backend.Services;

namespace stock_evidence.backend.Controllers;

[Route("api/[controller]")]
[ApiController]
public class MaterialController : ControllerBase
{
    private readonly MaterialService _materialService;

    public MaterialController(MaterialService materialService)
    {
        _materialService = materialService;
    }
    
    [HttpPost]
    public async Task<IActionResult> CreateMaterialAsync([FromBody] Material material)
    {
        await _materialService.InsertMaterialAsync(material);
        return Ok();
    }
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Material>>> GetAllMaterialAsync()
    {
        var result = await _materialService.GetAllMaterialsAsync();
        return Ok(result);
    }
    [HttpGet("{id}")]
    public async Task<ActionResult<Material?>> GetMaterialAsync(string id)
    {
        var result = await _materialService.GetMaterialAsync(id);
        if (result is null)
        {
            return NotFound();
        }

        return Ok(result);
    }
    [HttpPut("{id}")]
    public async Task<ActionResult<Material?>> UpdateMaterialAsync(string id, [FromBody] Material material)
    {
        var result = await _materialService.UpdateMaterialAsync(id, material);
        if (result is null)
        {
            return NotFound();
        }

        return Ok(result);
    }
    [HttpDelete("{id}")]
    public async Task<IActionResult> CreateMaterialAsync(string id)
    {
        var result = await _materialService.DeleteMaterialAsync(id);
        if (result is null)
        {
            return NotFound();
        }

        return Ok();
    }
}