using System.Security.Claims;
using ThreadsAPI.ServiceLayer;

namespace ServerlessAPI.Controllers;

public static class IDHandling
{
    public static int? ExtractID(HttpRequest httpRequest, IJWTservice jwtService, out int? errorCode)
    {
        string? jwt = httpRequest.Headers.Authorization.Count == 1 ? httpRequest.Headers.Authorization.ToString() : null;

        System.Diagnostics.Debug.WriteLine(jwt);

        if (jwt == null)
        {
            errorCode = 401;
            return null;
        }

        ClaimsPrincipal? userIDClaim = jwtService.ValidateJWT(jwt);
        System.Diagnostics.Debug.WriteLine(userIDClaim);

        if (userIDClaim == null)
        {
            errorCode = 401;
            return null;
        }

        bool parse = int.TryParse(userIDClaim.FindFirstValue("UserID"), out int userID);
        if (parse == false)
        {
            errorCode = 500;
            return null;
        }
        
        errorCode = null;
        return userID;
    }

    public static bool MatchID(HttpRequest httpRequest, int requiredID, IJWTservice jwtService, out int? errorCode)
    {
        int? userID = ExtractID(httpRequest, jwtService, out errorCode);

        if(errorCode == null)
        {
            return false;
        }

        if (userID != requiredID)
        {
            errorCode = 403;
            return false;
        }

        errorCode = null;
        return true;
    }
}
