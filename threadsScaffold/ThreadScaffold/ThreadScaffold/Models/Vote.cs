using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.ComponentModel.Design;
using Microsoft.EntityFrameworkCore;

namespace ThreadsAPI.Models;

public abstract class Vote
{
    [Required]
    public UpvoteScore Value { get; set; }

    [Required]
    public int UserID { get; set; }

    [ForeignKey("UserID")]
    public User Voter { get; set; } = null!;
}

[PrimaryKey(nameof(CommentID), nameof(UserID))]
public class CommentVote : Vote
{
    [Required]
    public int CommentID { get; set; }

    [ForeignKey("CommentID")]
    public Comment Comment { get; set; } = null!;

    public CommentVoteOutputDTO Convert()
    {
        return new CommentVoteOutputDTO { CommentID = UserID, UserID = UserID, Value = Value }; 
    }
}

[PrimaryKey(nameof(PostID), nameof(UserID))]
public class PostVote : Vote {

    [Required]
    public int PostID { get; set; }

    [ForeignKey("PostID")]
    public Post Post { get; set; } = null!;

    public PostVoteOutputDTO Convert()
    {
        return new PostVoteOutputDTO { PostID = UserID, UserID = UserID, Value = Value };
    }
}

public enum UpvoteScore: short
{
    Downvote = -1,
    Novote = 0,
    Upvote = 1
}

