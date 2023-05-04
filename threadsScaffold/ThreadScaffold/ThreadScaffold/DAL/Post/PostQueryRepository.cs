using System;
using System.Linq;
using Microsoft.EntityFrameworkCore;
using ThreadsAPI.Models;

namespace ThreadsAPI.DAL;

public class PostQueryRepository : IPostQueryRepository
{
    private ThreadsAPIContext _dbContext;
    private readonly int pageSize;

    public PostQueryRepository(ThreadsAPIContext dbContext)
    {
        _dbContext = dbContext;
        pageSize = 50;

    }

    public async Task<List<CommentOutputDTO>?> GetChildDTOs(int postID, int? userID)
    {
        Post? post = await _dbContext.Posts
                                      .Include(p => p.ChildComments)
                                      .ThenInclude(c => c.ChildComments)
                                      .Include(p => p.ChildComments)
                                      .ThenInclude(c => c.Poster)
                                      .Include(p => p.ChildComments)
                                      .ThenInclude(c => c.Votes)
                                      .SingleOrDefaultAsync(p => p.PostID == postID);

        if (post == null)
        {
            return null;
        }
        return post.ChildComments
            .Where(c => c.ParentCommentID is null)
            .Select(c => c.Convert(userID))
            .OrderBy((dto) => dto.VoteTotal * -1)
            .ToList();
    }

    public async Task<Post?> GetPost(int postID)
    {
        return await _dbContext.Posts
                               .Include(p => p.Votes)
                               .Include(p => p.Poster)
                               .SingleOrDefaultAsync(p => p.PostID == postID);
    }

    public async Task<Post?> GetPost(string postTitle)
    {
        return await _dbContext.Posts
                               .Include(p => p.Poster)
                               .Include(p => p.Votes)
                               .SingleOrDefaultAsync(p => p.Title == postTitle);
    }

    public async Task<PostVote?> GetUserVote(int postID, int userID)
    {
        PostVote? postVote = await _dbContext.PostVotes
                                            .SingleOrDefaultAsync(pv => pv.PostID == postID && pv.UserID == userID);
        return postVote;
    }

    public async Task<int?> GetVoteTotal(int postID)
    {
        Post? post = await _dbContext.Posts.SingleOrDefaultAsync(p => p.PostID == postID);
        if (post == null)
        {
            return null;
        }
        return post.Votes.Aggregate(0, (sum, vote) => sum += (int)vote.Value);
    }

    public async Task<List<PostOutputDTO>?> GetTopAllTime(int? userID, int page)
    {
        return await _dbContext.Posts
                               .Include(p => p.Poster)
                               .Include(p => p.Votes)
                               .OrderByDescending(p => p.Votes.Sum(v => (int)v.Value))
                               .Skip(pageSize * page)
                               .Take(pageSize)
                               .Select(p => p.Convert(userID))
                               .ToListAsync();
    }

    public async Task<List<PostOutputDTO>?> GetTopToday(int? userID, int page)
    {
        return await _dbContext.Posts
                               .Include(p => p.Poster)
                               .Include(p => p.Votes)
                               .Where(p => p.PostTime.CompareTo(DateTime.UtcNow.AddDays(-1)) >= 0)
                               .OrderByDescending(p => p.Votes.Sum(v => (int)v.Value))
                               .Skip(pageSize * page)
                               .Take(pageSize)
                               .Select(p => p.Convert(userID))
                               .ToListAsync();
    }

    public async Task<List<PostOutputDTO>?> GetTopWeek(int? userID, int page)
    {
        return await _dbContext.Posts
                               .Include(p => p.Poster)
                               .Include(p => p.Votes)
                               .Where(p => p.PostTime.CompareTo(DateTime.UtcNow.AddDays(-7)) >= 0)
                               .OrderByDescending(p => p.Votes.Sum(v => (int)v.Value))
                               .Skip(pageSize * page)
                               .Take(pageSize)
                               .Select(p => p.Convert(userID))
                               .ToListAsync();
    }

    public async Task<List<PostOutputDTO>?> GetTopMonth(int? userID, int page)
    {
        return await _dbContext.Posts
                               .Include(p => p.Poster)
                               .Include(p => p.Votes)
                               .Where(p => p.PostTime.CompareTo(DateTime.UtcNow.AddMonths(-1)) >= 0)
                               .OrderByDescending(p => p.Votes.Sum(v => (int)v.Value))
                               .Skip(pageSize * page)
                               .Take(pageSize)
                               .Select(p => p.Convert(userID))
                               .ToListAsync();
    }

    public async Task<List<PostOutputDTO>?> GetTopYear(int? userID, int page)
    {
        return await _dbContext.Posts
                               .Include(p => p.Poster)
                               .Include(p => p.Votes)
                               .Where(p => p.PostTime.CompareTo(DateTime.UtcNow.AddYears(-1)) >= 0)
                               .OrderByDescending(p => p.Votes.Sum(v => (int)v.Value))
                               .Skip(pageSize * page)
                               .Take(pageSize)
                               .Select(p => p.Convert(userID))
                               .ToListAsync();
    }

    public async Task<List<PostTitleDTO>> GetSuggestedResults(string query)
    {
        return await _dbContext.Posts
                               .Include(p => p.Poster)
                               .Include(p => p.Votes)
                               .Where(p => EF.Functions.ILike(p.Title, "%" + query + "%"))
                               .OrderByDescending(p => p.Votes.Sum(v => (int)v.Value))
                               .Take(5)
                               .Select(p => p.TitleConvert())
                               .ToListAsync();
    }

    public async Task<List<PostOutputDTO>?> GetPostsContaining(string query, int? userID, int pageNumber)
    {
        return await _dbContext.Posts
                               .Include(p => p.Poster)
                               .Include(p => p.Votes)
                               .Where(p => EF.Functions.ILike(p.Title, "%" + query + "%") || EF.Functions.ILike(p.Content, "%" + query + "%"))
                               .OrderByDescending(p => p.Votes.Sum(v => (int)v.Value))
                               .Skip(pageSize * pageNumber)
                               .Take(pageSize)
                               .Select(p => p.Convert(userID))
                               .ToListAsync();
    }
}
