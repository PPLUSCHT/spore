using System;
using ThreadsAPI.Models;

namespace ThreadsAPI.DAL;

public interface IPostCommandRepository
{
    Task<Post> PostPost(PostInputDTO dto);
    Task<bool> DeletePost(int postID);
    Task<int> DeletePost(int postID, int userID);
    Task<Post?> UpdatePost(int postID, string content);
    Task<PostVote?> AddPostVote(PostVoteInputDTO dto);
    Task<bool> DeletePostVote(int commentID, int userID);
    Task<PostVote?> UpdatePostVote(PostVoteInputDTO dto);
}