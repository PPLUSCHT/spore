using System;
using ThreadsAPI.Models;

namespace ThreadsAPI.DAL;

public interface IUserCommandRepository
{
    public Task<User?> CreateUser(UserInputDTO dto);
    public Task<bool> DeleteUser(int userID);
    public Task<User?> UpdateUserName(int userID, string newUsername);
    public Task<string?> Login(string username, string password);
}

