using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ThreadsAPI.Models;

public class Comment
{
    public int CommentID { get; set; }

    [Required]
    public int PosterID { get; set; }

    [ForeignKey("PosterID")]
    public User Poster { get; set; } = null!;

    [Required]
    public int PostID { get; set; }

    [ForeignKey("PostID")]
    public Post Post { get; set; } = null!;

    public int? ParentCommentID { get; set; }

    [ForeignKey("ParentCommentID")]
    public Comment ParentComment { get; set; } = null!;

    public DateTime PostTime { get; set; }

    [Required]
    [StringLength(1500)]
    public string Content { get; set; } = null!;

    public List<Comment> ChildComments { get; set; }

    public List<CommentVote> Votes { get; set; }

    public Comment()
    {
        Votes = new List<CommentVote>();
        ChildComments = new List<Comment>();
        PostTime = DateTime.UtcNow;
    }

    public CommentOutputDTO Convert(int? userID)
    {
        CommentOutputDTO commentOutputDTO = new CommentOutputDTO();
        commentOutputDTO.Content = Content;
        commentOutputDTO.PosterName = Poster.UserName;
        commentOutputDTO.TimeString = TimeConversion.ConvertToString(PostTime);
        commentOutputDTO.CommentID = CommentID;
        commentOutputDTO.ChildIDs = ChildComments.Select(c => c.CommentID).ToList();
        commentOutputDTO.UserID = PosterID;
    
        foreach (CommentVote vote in Votes) { 
            if(vote.UserID == userID)
            {
                commentOutputDTO.UserVote = (int) vote.Value;
            }
            commentOutputDTO.VoteTotal += (int)vote.Value;
        }

        return commentOutputDTO;
    }
}

