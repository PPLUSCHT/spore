using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Security.Principal;
using System.Text;
using Microsoft.IdentityModel.Tokens;

namespace ThreadsAPI.ServiceLayer;

public class JWThardcoded: IJWTservice
{
    public JWThardcoded() { }
    public string CreateJWT(int userID)
    {
        string key = "H213I45D53SF65J4N2VK$J6RF$%^KS5FDNh$@#$bfjhDFSNCMREFIF" +
            "4532MCWSF%$@#JN54g3#%ghs8OTA7SFNvugsfPNf";
        var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(key));
        var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha512);
        var securityToken = new JwtSecurityToken(
            signingCredentials: credentials,
            issuer: "Sample",
            audience: "Sample",
            claims: new[]
            {
                new Claim("UserID", userID.ToString())
            },
            expires: DateTime.UtcNow.AddMinutes(30)
        );
        return new JwtSecurityTokenHandler().WriteToken(securityToken);
    }

    public ClaimsPrincipal? ValidateJWT(string jwt)
    {
        SecurityToken blankToken;
        var tokenHandler = new JwtSecurityTokenHandler();
        var validationParams = GetTokenValidationParameters();

        try
        {
            ClaimsPrincipal principal = tokenHandler.ValidateToken(jwt, validationParams, out blankToken);
            return principal;
        }
        catch
        {
            return null;
        }
    }

    private TokenValidationParameters GetTokenValidationParameters()
    {
        string key = "H213I45D53SF65J4N2VK$J6RF$%^KS5FDNh$@#$bfjhDFSNCMREFIF" +
            "4532MCWSF%$@#JN54g3#%ghs8OTA7SFNvugsfPNf";
        return new TokenValidationParameters()
        {
            ValidateLifetime = true,
            ValidateAudience = false,
            ValidateIssuer = false,
            ValidIssuer = "Sample",
            ValidAudience = "Sample",
            ClockSkew = TimeSpan.Zero,
            IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(key))
        };
    }

}

