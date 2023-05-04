using System;
using ThreadsAPI.Models;

namespace ThreadsAPI.DAL;

public interface ICommentQueryRepository
{
    Task<Comment?> GetComment(int commentID);
    Task<List<CommentOutputDTO>?> GetChildDTOs(int commentID, int? userID);
    Task<int?> GetVoteTotal(int commentID);
    Task<CommentVote?> GetUserVote(int commentID, int userID);
}

