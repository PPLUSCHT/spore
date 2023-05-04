using System;
using System.Text.RegularExpressions;
using ThreadsAPI.DAL;
using ThreadsAPI.Models;

namespace ThreadsAPI.ServiceLayer;

public class UserValidator:IUserValidator
{
    private IUserQueryRepository _queryRepository;

    public UserValidator(IUserQueryRepository queryRepository)
    {
        this._queryRepository = queryRepository;
    }

    public async Task<bool> ValidateNewUser(string username, string password)
    {
        if(ValidatePassword(password) && await ValidateUsername(username))
        {
            return true;
        }
        return false;
    }

    private bool ValidatePassword(string password)
    {
        string uppercase = @"[A-Z]";
        string lowercase = @"[a-z]";
        string number = @"[0-9]";
        string specialCharacter = @"[!@#$%^&*_+=;:<>?~]";
        if (Regex.IsMatch(password, uppercase) && Regex.IsMatch(password, lowercase)
            && Regex.IsMatch(password, number) && Regex.IsMatch(password, specialCharacter)
            && password.Length >= 8 && password.Length <=20)
        {
            return true;
        }
        return false;
    }

    public async Task<bool> ValidateUsername(string username)
    {
        if (username.Length >= 6
       && !(await _queryRepository.CheckIfUsernameExists(username))
            && username.All(char.IsAscii) && username.Length <= 20)
        {
            return true;
        }
        return false;
    }
}
