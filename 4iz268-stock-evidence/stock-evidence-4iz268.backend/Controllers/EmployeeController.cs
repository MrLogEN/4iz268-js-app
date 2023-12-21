using Microsoft.AspNetCore.Mvc;
using stock_evidence.backend.Data;

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
    
}