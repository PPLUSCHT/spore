using System;
using System.ComponentModel.DataAnnotations;

namespace ThreadsAPI.Models;

public class UserInputDTO
{
    [Required]
    [StringLength(20)]
    public string UserName { get; set; } = null!;

    [Required]
    [StringLength(20)]
    public string Password { get; set; } = null!;

    public User Convert()
    {
        User user = new User();
        user.UserName = UserName;
        return user;
    }
}

