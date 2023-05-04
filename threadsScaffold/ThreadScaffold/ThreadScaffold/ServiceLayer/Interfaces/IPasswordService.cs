using System;
namespace ThreadsAPI.ServiceLayer;

public interface IPasswordService
{
    public byte[] HashPassword(string password, byte[] salt);
    public byte[] CreateSalt();
    public bool ValidatePassword(string password, byte[] salt, byte[] passwordHash);
}

