using System;
using ThreadsAPI.Models;

namespace ThreadsAPI.DAL;

public interface IPostQueryRepository
{
    Task<Post?> GetPost(int postID);
    Task<Post?> GetPost(string postTitle);
    Task<List<CommentOutputDTO>?> GetChildDTOs(int postID, int? userID);
    Task<int?> GetVoteTotal(int postID);
    Task<PostVote?> GetUserVote(int postID, int userID);
    Task<List<PostOutputDTO>?> GetPostsContaining(string query, int? userID, int pageNumber);
    Task<List<PostTitleDTO>?> GetSuggestedResults(string query);
    Task<List<PostOutputDTO>?> GetTopAllTime(int? userID, int page);
    Task<List<PostOutputDTO>?> GetTopToday(int? userID, int page);
    Task<List<PostOutputDTO>?> GetTopWeek(int? userID, int page);
    Task<List<PostOutputDTO>?> GetTopMonth(int? userID, int page);
    Task<List<PostOutputDTO>?> GetTopYear(int? userID, int page);
}
