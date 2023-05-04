using System;
using ThreadsAPI.Models;

namespace ThreadsAPI.DAL;

public interface ICommentCommandRepository
{
    Task<Comment> PostComment(CommentInputDTO dto);
    Task<bool> DeleteComment(int commentID);
    Task<int> DeleteComment(int commentID, int userID);
    Task<int> DeleteOrNullComment(int commentID, int userID);
    Task<Comment?> UpdateComment(int commentID, string body);
    Task<CommentVote?> AddCommentVote(CommentVoteInputDTO dto);
    Task<bool> DeleteCommentVote(int commentID, int userID);
    Task<CommentVote?> UpdateCommentVote(CommentVoteInputDTO dto);
}
