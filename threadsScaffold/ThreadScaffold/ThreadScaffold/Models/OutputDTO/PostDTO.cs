using System;
using System.ComponentModel.DataAnnotations;

namespace ThreadsAPI.Models;

public class PostOutputDTO
{
    public string PosterName { get; set; } = null!;

    public string TimeString { get; set; } = null!;

    public string Content { get; set; } = null!;

    public string Title { get; set; } = null!;

    public int UserID { get; set; }

    public int UserVote { get; set; }

    public int VoteTotal { get; set; }

    public int PostID { get; set; }
}

