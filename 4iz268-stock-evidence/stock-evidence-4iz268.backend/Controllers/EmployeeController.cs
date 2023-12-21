using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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
    public async Task<IActionResult> CreateEmployee([FromBody] Employee newEmployee)
    {
        newEmployee.IdEmp = Guid.NewGuid().ToString();
        await _appDbContext.Emps.AddAsync(newEmployee);
        await _appDbContext.SaveChangesAsync();
        return Ok();
    }
    [HttpGet("{id}")]
    public async Task<ActionResult<Employee?>> GetEmployee(string id)
    {
        var result = await _appDbContext.Emps.FindAsync(id);
        return Ok(result);
    }
    [HttpGet]
    public async Task<ActionResult<IEnumerable<Employee>>> GetAllEmployees()
    {
        var result = await _appDbContext.Emps.ToListAsync();
        return Ok(result);
    }
    [HttpPut]
    public async Task<IActionResult> UpdateEmployee([FromBody] Employee updatedEmployee)
    {
        var toUpdate = await _appDbContext.Emps.FindAsync(updatedEmployee.IdEmp);
        if (toUpdate is null)
        {
            return NotFound();
        }

        toUpdate.Wrhs = updatedEmployee.Wrhs;
        toUpdate.IdWrhs = updatedEmployee.IdWrhs;
        toUpdate.NamesEmp = updatedEmployee.NamesEmp;
        toUpdate.SurnEmp = updatedEmployee.SurnEmp;
        toUpdate.SinceEmp = updatedEmployee.SinceEmp;
        toUpdate.WageEmp = updatedEmployee.WageEmp;

        _appDbContext.Emps.Entry(toUpdate).State = EntityState.Modified;
        await _appDbContext.SaveChangesAsync();
        return Ok();
    }
    [HttpDelete("{id}")]
    public async Task<int> DeleteEmployee(string id)
    {
        throw new NotImplementedException();
    }
}