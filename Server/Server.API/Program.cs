//using Servec.Core.Services;
//using Server.API.Mapping;
//using Server.Core;
//using Server.Core.Repositories;
//using Server.Data;
//using Server.Data.Repositories;
//using Server.Service.Services;

//var builder = WebApplication.CreateBuilder(args);
//// Add services to the container.

//// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
//builder.Services.AddEndpointsApiExplorer();
//builder.Services.AddSwaggerGen();
//builder.Services.AddScoped<IWorkerRepositoriy, WorkerRepository>();
//builder.Services.AddScoped<IWorkerService, WorkerService>();    
//builder.Services.AddDbContext<DataContext>();
//builder.Services.AddAutoMapper(typeof(MappingProfile));
//builder.Services.AddAutoMapper(typeof(MappingPostModelProfile));
//builder.Services.AddAuthorization();

//var app = builder.Build();
//// Configure the HTTP request pipeline.
//if (app.Environment.IsDevelopment())
//{
//    app.UseSwagger();
//    app.UseSwaggerUI();
//}

//app.UseHttpsRedirection();

//app.UseAuthorization();

//app.MapControllers();

//app.Run();
using EmployeeManagement.Data.Repositories;
using EmployeesManagementServer.Core.Services;
using EmployeesManagementServer.Service.Services;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using Microsoft.OpenApi.Models;
using Servec.Core.Services;
using Server.API.Mapping;
using Server.Core.Mapping;
using Server.Core.Repositories;
using Server.Core.Services;
using Server.Data;
using Server.Data.Repositories;
using Server.Service.Services;
using System.Text;

var builder = WebApplication.CreateBuilder(args);

// הוספת שירותים למכל

// למד עוד על תצורת Swagger/OpenAPI בכתובת https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen(options =>
{
    options.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
    {
        Scheme = "Bearer",
        BearerFormat = "JWT",
        In = ParameterLocation.Header,
        Name = "Authorization",
        Description = "Bearer Authentication with JWT Token",
        Type = SecuritySchemeType.Http
    });
    options.AddSecurityRequirement(new OpenApiSecurityRequirement
    {
        {
            new OpenApiSecurityScheme
            {
                Reference = new OpenApiReference
                {
                    Id = "Bearer",
                    Type = ReferenceType.SecurityScheme
                }
            },
            new List<string>()
        }
    });
});

//builder.Services.AddSwaggerGen();
builder.Services.AddScoped<IPositionRepository, PositionRepository>();
builder.Services.AddScoped<IPositionService,PositionService>();
builder.Services.AddScoped<IPositionEmployeeRepository, PositionEmployeeRepository>();

//builder.Services.AddScoped<IPositionNameRepository, PositionNameRepository>();
builder.Services.AddScoped<IPositionEmployeeService,PositionEmployeeService>();
//builder.Services.AddScoped<IPositionNameService, PositionNameService>();
builder.Services.AddScoped<IEmployeeRepository, EmployeeRepository>();
builder.Services.AddScoped<IEmployeeService, EmployeeService>();
builder.Services.AddDbContext<DataContext>();
builder.Services.AddAuthentication(options =>
{
    options.DefaultAuthenticateScheme = JwtBearerDefaults.AuthenticationScheme;
    options.DefaultChallengeScheme = JwtBearerDefaults.AuthenticationScheme;
})
    .AddJwtBearer(options =>
    {
        options.TokenValidationParameters = new TokenValidationParameters
        {
            ValidateIssuer = true,
            ValidateAudience = true,
            ValidateLifetime = true,
            ValidateIssuerSigningKey = true,
            ValidIssuer = builder.Configuration["JWT:Issuer"],
            ValidAudience = builder.Configuration["JWT:Audience"],
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["JWT:Key"]))
        };
    });
builder.Services.AddAutoMapper(typeof(MappingProfile), typeof(MappingPostModelProfile));
// הוספת שירותי הרשאה
builder.Services.AddScoped<IUserService, UserService>();
builder.Services.AddScoped<IUserRepository, UserRepository>();
builder.Services.AddAuthorization();
// הוספת שירות בקרים
builder.Services.AddControllers();

var policy = "policy";
builder.Services.AddCors(options =>
{
    options.AddPolicy(name: policy, policy =>
    {
        policy.AllowAnyOrigin().AllowAnyHeader().AllowAnyMethod();
    });
});


var app = builder.Build();

// תצורת צינור בקשות HTTP

if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();


app.UseAuthentication();


app.UseAuthorization();

app.UseCors(policy);

app.MapControllers();


app.Run();
