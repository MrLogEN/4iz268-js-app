using Microsoft.AspNetCore.Mvc;
using stock_evidence.backend.Data;
using stock_evidence.backend.Models;

namespace stock_evidence.backend.Controllers;

[Route("api/[controller]")]
[ApiController]
public class EmployeeController: ControllerBase
{
    private readonly AppDbContext _appDbContext;

    public EmployeeController(AppDbContext appDbContext)
    {
        _appDbContext = appDbContext;
    }

    [HttpPost]
    public async Task<int> CreateEmployee([FromBody] Employee newEmployee)
    {
        newEmployee.IdEmp = Guid.NewGuid().ToString();
        await _appDbContext.Emps.AddAsync(newEmployee);
        await _appDbContext.SaveChangesAsync();
        return StatusCodes.Status200OK;
    }
    [HttpGet("{id}")]
    public async Task<ActionResult<Employee?>> GetEmployee(string id)
    {
        var result = await _appDbContext.Emps.FindAsync(id);
        return Ok(result);
    }
    [HttpGet]
    public async Task<IEnumerable<Employee>> GetAllEmployees()
    {
        throw new NotImplementedException();
    }
    [HttpPut]
    public async Task<int> UpdateEmployee([FromBody] Employee updatedEmployee)
    {
        throw new NotImplementedException();
    }
    [HttpDelete("{id}")]
    public async Task<int> DeleteEmployee(string id)
    {
        throw new NotImplementedException();
    }
}