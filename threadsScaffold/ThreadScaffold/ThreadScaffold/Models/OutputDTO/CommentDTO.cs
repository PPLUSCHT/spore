using System;
namespace ThreadsAPI.Models;

public class CommentOutputDTO
{
    public string PosterName { get; set; } = null!;

    public string TimeString { get; set; } = null!;

    public string Content { get; set; } = null!;

    public int UserVote { get; set; }

    public int VoteTotal { get; set; }

    public int CommentID { get; set; }

    public int UserID { get; set; }

    public List<int>? ChildIDs { get; set; }
}

