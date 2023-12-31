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
builder.Services.AddScoped<MaterialService>();
builder.Services.AddScoped<WarehouseService>();
builder.Services.AddScoped<StockService>();

var app = builder.Build();

app.MapControllers();

app.Run();