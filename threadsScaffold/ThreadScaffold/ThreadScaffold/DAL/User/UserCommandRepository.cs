using System;
using Microsoft.EntityFrameworkCore;
using ThreadsAPI.Models;
using ThreadsAPI.ServiceLayer;
namespace ThreadsAPI.DAL;

public class UserCommandRepository : IUserCommandRepository
{
    private ThreadsAPIContext _dbContext;
    private IPasswordService _passwordService;
    private IJWTservice _jwtService;
    private IUserValidator _userValidator;

    public UserCommandRepository(ThreadsAPIContext dbContext,
                                IPasswordService passwordService,
                                IUserValidator userValidator,
                                IJWTservice jwtService)
    {
        this._dbContext = dbContext;
        this._passwordService = passwordService;
        this._jwtService = jwtService;
        this._userValidator = userValidator;
    }

    public async Task<User?> CreateUser(UserInputDTO dto)
    {
        if(await _userValidator.ValidateNewUser(dto.UserName, dto.Password))
        {
            User newUser = dto.Convert();
            newUser.Salt = _passwordService.CreateSalt();
            newUser.PasswordHash = _passwordService.HashPassword(dto.Password, newUser.Salt);
            await _dbContext.Users.AddAsync(newUser);
            await _dbContext.SaveChangesAsync();
            return newUser;
        }
        return null;
    }

    public async Task<bool> DeleteUser(int userID)
    {
        User? user = await _dbContext.Users.SingleOrDefaultAsync(user => user.UserID == userID);
        if (user == null)
        {
            return false;
        }
        _dbContext.Users.Remove(user);
        await _dbContext.SaveChangesAsync();
        return true;
    }

    public async Task<User?> UpdateUserName(int userID, string newUsername)
    {
        if (!await _userValidator.ValidateUsername(newUsername))
        {
            return null;
        }

        User? user = await _dbContext.Users.SingleOrDefaultAsync(user => user.UserID == userID);

        if (user == null)
        {
            return null;
        }

        user.UserName = newUsername;
        await _dbContext.SaveChangesAsync();
        return user;
    }

    public async Task<string?> Login(string username, string password)
    {
        User? user = await _dbContext.Users
                                     .SingleOrDefaultAsync(u => username == u.UserName);
        if(user == null)
        {
            return null;
        }

        if(!_passwordService.ValidatePassword(password, user.Salt, user.PasswordHash)){
            return null;
        }

        return _jwtService.CreateJWT(user.UserID);
    }
}

