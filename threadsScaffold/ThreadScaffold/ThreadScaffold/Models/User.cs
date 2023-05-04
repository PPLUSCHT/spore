using System;
using System.ComponentModel.DataAnnotations;
using Microsoft.EntityFrameworkCore;

namespace ThreadsAPI.Models;

[PrimaryKey("UserID")]
public class User
{
    public int UserID { get; set; }

    [Required]
    [StringLength(20)]
    public string UserName { get; set; } = null!;

    [Required]
    [MaxLength(20)]
    [MinLength(20)]
    public byte[] PasswordHash { get; set; } = null!;

    [Required]
    [MaxLength(16)]
    [MinLength(16)]
    public byte[] Salt { get; set; } = null!;

    public UserOutputDTO Convert()
    {
        return new UserOutputDTO()
        {
            Username = UserName,
            UserID = UserID
        };
    }
}

