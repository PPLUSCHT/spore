using System.Text.Json;
using Amazon;
using ThreadsAPI.DAL;
using ThreadsAPI.ServiceLayer;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;

var builder = WebApplication.CreateBuilder(args);

Task<string> dbSecretTask = Secrets.GetDBSecret();
Task<string> jwtSecretTask = Secrets.GetJWTSecret();
List<Task> secrets = new List<Task>{dbSecretTask, jwtSecretTask}; 

builder.Services.AddSingleton<IJWTservice>(new JWTConfig("hello"));
builder.Services.AddTransient<IPasswordService, PasswordService>();
builder.Services.AddTransient<IUserValidator, UserValidator>();

builder.Services.AddTransient<IUserQueryRepository, UserQueryRepository>();
builder.Services.AddTransient<IUserCommandRepository, UserCommandRepository>();

builder.Services.AddTransient<IPostQueryRepository, PostQueryRepository>();
builder.Services.AddTransient<IPostCommandRepository, PostCommandRepository>();

builder.Services.AddTransient<ICommentQueryRepository, CommentQueryRepository>();
builder.Services.AddTransient<ICommentCommandRepository, CommentCommandRepository>();

var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";

builder.Services.AddCors(options =>
        {
            options.AddPolicy(name: MyAllowSpecificOrigins,
                              builder =>
                              {
                                  builder.WithOrigins("http://localhost:4200");
                                  builder.AllowAnyHeader();
                                  builder.AllowAnyMethod();
                              });
        });

builder.Services
        .AddControllers()
        .AddJsonOptions(options =>
        {
            options.JsonSerializerOptions.PropertyNamingPolicy = JsonNamingPolicy.CamelCase;
        });

string region = Environment.GetEnvironmentVariable("AWS_REGION") ?? RegionEndpoint.USEast2.SystemName;

// Add AWS Lambda support. When running the application as an AWS Serverless application, Kestrel is replaced
// with a Lambda function contained in the Amazon.Lambda.AspNetCoreServer package, which marshals the request into the ASP.NET Core hosting framework.
builder.Services.AddAWSLambdaHosting(LambdaEventSource.HttpApi);

while (secrets.Any()){
        var task = await Task.WhenAny(secrets);   
        if(task == dbSecretTask){
                string connectionString = await dbSecretTask;
                builder.Services.AddDbContext<ThreadsAPIContext>(options => options.UseNpgsql(connectionString));
                secrets.Remove(dbSecretTask);
        }
        if(task == jwtSecretTask){
                string key = await jwtSecretTask;
                builder.Services.AddSingleton<IJWTservice>(new JWTConfig(key));
                secrets.Remove(jwtSecretTask);
        }          
}

// builder.Services.AddEndpointsApiExplorer();
//         builder.Services.AddSwaggerGen(c =>
//         {
//             c.SwaggerDoc("v1", new OpenApiInfo
//             {
//                 Title = "My API",
//                 Version = "v1"
//             });
//             c.AddSecurityDefinition("Bearer", new OpenApiSecurityScheme
//             {
//                 In = ParameterLocation.Header,
//                 Description = "Please insert JWT with Bearer into field",
//                 Name = "Authorization",
//                 Type = SecuritySchemeType.ApiKey
//             });
//             c.AddSecurityRequirement(new OpenApiSecurityRequirement {
//            {
//              new OpenApiSecurityScheme
//              {
//                Reference = new OpenApiReference
//                {
//                  Type = ReferenceType.SecurityScheme,
//                  Id = "Bearer"
//                }
//               },
//               new string[] { }
//             }
//            });
//         });

var app = builder.Build();
app.UseCors(MyAllowSpecificOrigins);
// app.UseSwagger();
// app.UseSwaggerUI();
app.MapControllers();

app.Run();
