using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using stock_evidence.backend.Data;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddDbContext<EvidenceDbContext>(options =>
{
    options.UseNpgsql(Environment.GetEnvironmentVariable("CON_STRING"));
});

var app = builder.Build();

app.MapControllers();

app.Run();