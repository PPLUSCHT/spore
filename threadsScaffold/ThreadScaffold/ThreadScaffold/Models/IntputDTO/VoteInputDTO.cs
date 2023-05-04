using System;
using System.ComponentModel.DataAnnotations;

namespace ThreadsAPI.Models;

public class VoteInputDTO
{
    [Required]
    public UpvoteScore Value { get; set; }

    [Required]
    public int UserID { get; set; }
}

public class PostVoteInputDTO: VoteInputDTO
{
    [Required]
    public int PostID { get; set; }

    public PostVote Convert()
    {
        PostVote postVote = new PostVote();
        postVote.PostID = PostID;
        postVote.Value = Value;
        postVote.UserID = UserID;
        return postVote;
    }
}

public class CommentVoteInputDTO : VoteInputDTO
{
    [Required]
    public int CommentID { get; set; }

    public CommentVote Convert()
    {
        CommentVote commentVote = new CommentVote();
        commentVote.CommentID = CommentID;
        commentVote.Value = Value;
        commentVote.UserID = UserID;
        return commentVote;
    }
}

