using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// builder.Services.AddDbContext<someType>(options =>
// {
//     options.UseNpgsql(Environment.GetEnvironmentVariable(NameOfEnvVariable));
// });


var app = builder.Build();

app.MapGet("/", () => "Hello World!");

app.Run();