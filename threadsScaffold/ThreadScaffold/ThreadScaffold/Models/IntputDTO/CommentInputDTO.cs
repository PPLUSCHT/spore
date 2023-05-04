using System;
using System.ComponentModel.DataAnnotations;

namespace ThreadsAPI.Models;

public class CommentInputDTO
{
    [Required]
    public int UserID { get; set; }

    [Required]
    public int PostID { get; set; }

    public int ParentCommentID { get; set; }

    [Required]
    [StringLength(1500)]
    public string Content { get; set; } = null!;

    public Comment Convert()
    {
        Comment comment = new Comment();
        comment.PosterID = UserID;
        comment.PostID = PostID;
        comment.Content = Content;
        if (ParentCommentID > 0)
        {
            comment.ParentCommentID = ParentCommentID;
        }
        return comment;
    }
}

