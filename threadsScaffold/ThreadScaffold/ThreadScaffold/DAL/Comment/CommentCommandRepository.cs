using System;
using Microsoft.EntityFrameworkCore;
using ThreadsAPI.Models;

namespace ThreadsAPI.DAL;

public class CommentCommandRepository: ICommentCommandRepository
{

    private ThreadsAPIContext _dbContext;

    public CommentCommandRepository(ThreadsAPIContext dbContext)
    {
        this._dbContext = dbContext;
    }

    public async Task<Comment> PostComment(CommentInputDTO dto)
    {
        Comment comment = dto.Convert();
        await _dbContext.Comments.AddAsync(comment);
        await _dbContext.Entry(comment).Reference(c => c.Poster).LoadAsync();
        await _dbContext.SaveChangesAsync();
        return comment;
    }

    public async Task<bool> DeleteComment(int commentID)
    {
        Comment? comment = await _dbContext.Comments.SingleOrDefaultAsync(c => c.CommentID == commentID);
        if (comment == null)
        {
            return false;
        }
        _dbContext.Comments.Remove(comment);
        await _dbContext.SaveChangesAsync();
        return true;
    }

    public async Task<int> DeleteComment(int commentID, int userID)
    {
        Comment? comment = await _dbContext.Comments.SingleOrDefaultAsync(p => commentID == p.CommentID);
        if (comment == null)
        {
            return 404;
        }
        if (comment.PosterID != userID)
        {
            return 403;
        }
        _dbContext.Comments.Remove(comment);
        await _dbContext.SaveChangesAsync();
        return 200;
    }

    public async Task<int> DeleteOrNullComment(int commentID, int userID)
    {
        Comment? comment = await _dbContext.Comments.SingleOrDefaultAsync(p => commentID == p.CommentID);
        if (comment == null)
        {
            return 404;
        }
        if (comment.PosterID != userID)
        {
            return 403;
        }

        await _dbContext.Entry(comment)
                        .Collection(c => c.ChildComments)
                        .Query()
                        .FirstOrDefaultAsync();

        if (comment.ChildComments.Count >= 1)
        {
            comment.Content = "deleted";
            comment.PosterID = 0;
        }

        else
        {
            _dbContext.Comments.Remove(comment);
        }

        await _dbContext.SaveChangesAsync();
        return 200;
    }

    public async Task<Comment?> UpdateComment(int commentID, string content)
    {
        Comment? comment = await _dbContext.Comments.SingleOrDefaultAsync(c => c.CommentID == commentID);
        if(comment == null)
        {
            return null;
        }
        comment.Content = content;
        await _dbContext.SaveChangesAsync();
        return comment;
    }

    public async Task<CommentVote?> AddCommentVote(CommentVoteInputDTO commentVoteInputDTO)
    {
        Comment? comment = await _dbContext.Comments.SingleOrDefaultAsync(c => commentVoteInputDTO.CommentID == c.CommentID);
        if (comment == null)
        {
            return null;
        }
        CommentVote commentVote = commentVoteInputDTO.Convert();
        await _dbContext.CommentVotes.AddAsync(commentVote);
        await _dbContext.SaveChangesAsync();
        return commentVote;
    }

    public async Task<bool> DeleteCommentVote(int commentID, int userID)
    {
        CommentVote? commentVote = await _dbContext.CommentVotes.SingleOrDefaultAsync(cv => cv.CommentID == commentID && cv.UserID == userID);
        if(commentVote != null)
        {
            _dbContext.CommentVotes.Remove(commentVote);
            await _dbContext.SaveChangesAsync();
            return true;
        }
        return false;
    }

    public async Task<CommentVote?> UpdateCommentVote(CommentVoteInputDTO commentVoteInputDTO)
    {
        CommentVote? commentVote = await _dbContext.CommentVotes.SingleOrDefaultAsync(cv => cv.CommentID == commentVoteInputDTO.CommentID && cv.UserID == commentVoteInputDTO.UserID);
        if(commentVote != null)
        {
            commentVote.Value = commentVoteInputDTO.Value;
            await _dbContext.SaveChangesAsync();
            return commentVote;
        }
        return null;
    }
}

