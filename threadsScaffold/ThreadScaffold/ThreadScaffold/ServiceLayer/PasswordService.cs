using System;
using System.Security.Cryptography;
using System.Text;

namespace ThreadsAPI.ServiceLayer;

public class PasswordService : IPasswordService
{
    public byte[] CreateSalt()
    { 
        return RandomNumberGenerator.GetBytes(16);
    }

    public byte[] HashPassword(string password, byte[] salt)
    {
        return Rfc2898DeriveBytes.Pbkdf2(Encoding.ASCII.GetBytes(password).ToArray(), salt, 100000, HashAlgorithmName.SHA1, 20);
    }

    public bool ValidatePassword(string password, byte[] salt, byte[] hashPassword)
    {
        var compareHash = Rfc2898DeriveBytes.Pbkdf2(Encoding.ASCII.GetBytes(password).ToArray(), salt, 100000, HashAlgorithmName.SHA1, 20);
        for(int i = 0; i < hashPassword.Length; i++)
        {
            if (compareHash[i] != hashPassword[i]){
                return false;
            }
        }
        return true;
    }

}

