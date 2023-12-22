using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using stock_evidence.backend.Data;
using stock_evidence.backend.Models;
using stock_evidence.backend.Services;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddDbContext<EvidenceDbContext>(options =>
{
    options.UseNpgsql(Environment.GetEnvironmentVariable("CON_STRING"));
});
builder.Services.AddSingleton<MaterialService>();
builder.Services.AddSingleton<WarehouseService>();

var app = builder.Build();

app.MapControllers();

app.Run();