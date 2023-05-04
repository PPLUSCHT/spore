using System;
using System.ComponentModel.DataAnnotations;

namespace ThreadsAPI.Models;

public class PostInputDTO
{
    [Required]
    public int UserID { get; set; }

    [Required]
    [StringLength(5000)]
    public string Content { get; set; } = null!;

    [Required]
    [StringLength(200)]
    public string Title { get; set; } = null!;

    public Post Convert()
    {
        Post post = new Post();
        post.PosterID = UserID;
        post.Content = Content;
        post.Title = Title;
        return post;
    }
}

