using System;
using System.Security.Claims;

namespace ThreadsAPI.ServiceLayer;

public interface IJWTservice
{
    public string CreateJWT(int userID);
    public ClaimsPrincipal? ValidateJWT(string jwt);
}

