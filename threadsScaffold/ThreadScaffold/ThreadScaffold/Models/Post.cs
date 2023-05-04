using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace ThreadsAPI.Models;

[Index(nameof(Title), IsUnique = true)]
public class Post
{
    public int PostID { get; set; }

    [Required]
    public int PosterID { get; set; }

    [ForeignKey("PosterID")]
    public User Poster { get; set; }

    public DateTime PostTime { get; set; }

    [Required]
    [StringLength(5000)]
    public string Content { get; set; } = null!;

    [Required]
    [StringLength(200)]
    public string Title { get; set; } = null!;

    public List<PostVote> Votes { get; set; }
    public List<Comment> ChildComments { get; set; }

    public Post()
    {
        Votes = new List<PostVote>();
        ChildComments = new List<Comment>();
        PostTime = DateTime.UtcNow;
    }

    public PostOutputDTO Convert(int? userID)
    {
        PostOutputDTO postOutputDTO = new PostOutputDTO();
        postOutputDTO.Content = Content;
        postOutputDTO.PosterName = Poster.UserName;
        postOutputDTO.TimeString = TimeConversion.ConvertToString(PostTime);
        postOutputDTO.Title = Title;
        postOutputDTO.PostID = PostID;
        postOutputDTO.UserID = PosterID;

        foreach (PostVote vote in Votes)
        {
            if (vote.UserID == userID)
            {
                postOutputDTO.UserVote = (int)vote.Value;
            }
            postOutputDTO.VoteTotal += (int)vote.Value;
        }

        return postOutputDTO;
    }

    public PostTitleDTO TitleConvert()
    {
        PostTitleDTO dto = new PostTitleDTO();
        dto.Title = Title;
        dto.PostID = PostID;
        return dto;
    }

}

