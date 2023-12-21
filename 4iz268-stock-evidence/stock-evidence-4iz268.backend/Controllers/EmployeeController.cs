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
        throw new NotImplementedException();
    }
    [HttpGet("{id}")]
    public async Task<Employee?> GetEmployee(string id)
    {
        throw new NotImplementedException();
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