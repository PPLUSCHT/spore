using System;
using ThreadsAPI.Models;

namespace ThreadsAPI.ServiceLayer;

public interface IUserValidator
{
    public Task<bool> ValidateNewUser(string username, string password);
    public Task<bool> ValidateUsername(string username);
}

