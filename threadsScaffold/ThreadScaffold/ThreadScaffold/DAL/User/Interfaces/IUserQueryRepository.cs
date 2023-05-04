using System;
using ThreadsAPI.Models;

namespace ThreadsAPI.DAL;

public interface IUserQueryRepository
{
    public Task<bool> CheckIfUsernameExists(string username);
    public Task<List<User>> GetUsers();
    public Task<User?> GetUser(int userID);
    public Task<List<User>> GetUsersThatStartWith(string partialUsername);
}

