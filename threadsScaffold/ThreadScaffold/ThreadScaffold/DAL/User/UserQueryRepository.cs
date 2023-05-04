using System;
using Microsoft.EntityFrameworkCore;
using ThreadsAPI.Models;

namespace ThreadsAPI.DAL;

public class UserQueryRepository : IUserQueryRepository
{
    private ThreadsAPIContext _dbContext;

    public UserQueryRepository(ThreadsAPIContext dbContext)
    {
        this._dbContext = dbContext;
    }

    public async Task<bool> CheckIfUsernameExists(string username)
    {
        User? user = await _dbContext.Users.SingleOrDefaultAsync(user => user.UserName == username);
        if (user is null)
        {
            return false;
        }
        return true;
    }

    public async Task<User?> GetUser(int userID)
    {
        return await _dbContext.Users.SingleOrDefaultAsync(user => user.UserID == userID);
    }

    public async Task<List<User>> GetUsers()
    {
        return await _dbContext.Users.ToListAsync();
    }

    public async Task<List<User>> GetUsersThatStartWith(string partialUsername)
    {
        return await _dbContext.Users
                               .Where(user => EF.Functions.Like(user.UserName, "%" + partialUsername + "%"))
                               .ToListAsync();              
    }
}

