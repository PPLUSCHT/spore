using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using System.Text;


namespace ThreadsAPI.ServiceLayer
{
    public class JWTConfig : IJWTservice
    {
        string Key { get; set; }
        public JWTConfig(string key)
        {
            Key = key;
        }

        public string CreateJWT(int userID)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Key));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha512);
            var securityToken = new JwtSecurityToken(
                signingCredentials: credentials,
                issuer: "Sample",
                audience: "Sample",
                claims: new[]
                {
                new Claim("UserID", userID.ToString())
                },
                expires: DateTime.UtcNow.AddMinutes(90)
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
            return new TokenValidationParameters()
            {
                ValidateLifetime = true,
                ValidateAudience = false,
                ValidateIssuer = false,
                ValidIssuer = "Sample",
                ValidAudience = "Sample",
                ClockSkew = TimeSpan.Zero,
                IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(Key))
            };
        }
    }
}

