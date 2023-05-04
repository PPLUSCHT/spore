using System;
using Microsoft.EntityFrameworkCore;
using ThreadsAPI.Models;

namespace ThreadsAPI.DAL;

public class CommentQueryRepository: ICommentQueryRepository
{
    private ThreadsAPIContext _dbContext; 
    public CommentQueryRepository(ThreadsAPIContext dbContext)
    {
        this._dbContext = dbContext;
    }

    public async Task<List<CommentOutputDTO>?> GetChildDTOs(int commentID, int? userID)
    {
        Comment? comment = await _dbContext.Comments
                                          .Include(c => c.ChildComments)
                                            .ThenInclude(cc => cc.Poster)
                                          .Include(c => c.ChildComments)
                                            .ThenInclude(cc => cc.Votes)
                                          .Include(c => c.ChildComments)
                                            .ThenInclude(c => c.Poster)
                                          .SingleOrDefaultAsync(c => c.CommentID == commentID);

        if(comment == null)
        {
            return null;
        }
        return comment.ChildComments.Select(c => c.Convert(userID))
                                    .OrderBy((dto) =>  dto.VoteTotal * -1)
                                    .ToList();
    }

    public async Task<Comment?> GetComment(int commentID)
    {
        return await _dbContext.Comments
                               .Include(c => c.ChildComments)
                               .Include(c => c.Votes)
                               .Include(c => c.Poster)
                               .SingleOrDefaultAsync(c => c.CommentID == commentID);
    }

    public async Task<CommentVote?> GetUserVote(int commentID, int userID)
    {
        Comment? comment = await _dbContext.Comments
                                          .Include(c => c.Votes.Where((v) => v.UserID == userID))
                                          .SingleOrDefaultAsync(c => c.CommentID == commentID);
        if (comment == null)
        {
            return null;
        }
        return comment.Votes.FirstOrDefault((v) => v.UserID == userID);
    }

    public async Task<int?> GetVoteTotal(int commentID)
    {
        Comment? comment = await _dbContext.Comments
                                          .Include(c => c.Votes)
                                          .SingleOrDefaultAsync(c => c.CommentID == commentID);
        if (comment == null)
        {
            return null;
        }
        return comment.Votes.Aggregate(0, (sum, x) => sum += (int)x.Value);
    }
}

