using System;
using Microsoft.EntityFrameworkCore;
using ThreadsAPI.Models;

namespace ThreadsAPI.DAL;

public class PostCommandRepository:IPostCommandRepository
{
    private ThreadsAPIContext _dbContext;
	public PostCommandRepository(ThreadsAPIContext dbContext)
	{
        _dbContext = dbContext;
	}

    public async Task<Post> PostPost(PostInputDTO dto)
    {
        Post post = dto.Convert();
        await _dbContext.AddAsync(post);
        await _dbContext.Entry(post).Reference(p => p.Poster).LoadAsync();
        await _dbContext.SaveChangesAsync();
        return post;
    }

    public async Task<bool> DeletePost(int postID)
    {
        Post? post = await _dbContext.Posts.SingleOrDefaultAsync(p => postID == p.PostID);
        if(post == null)
        {
            return false;
        }
        _dbContext.Posts.Remove(post);
        await _dbContext.SaveChangesAsync();
        return true;
    }

    public async Task<int> DeletePost(int postID, int userID)
    {
        Post? post = await _dbContext.Posts.SingleOrDefaultAsync(p => postID == p.PostID);
        if (post == null)
        {
            return 404;
        }
        if (post.PosterID != userID)
        {
            return 403;
        }
        _dbContext.Posts.Remove(post);
        await _dbContext.SaveChangesAsync();
        return 200;
    }

    public async Task<Post?> UpdatePost(int postID, string content)
    {
        Post? post = await _dbContext.Posts.SingleOrDefaultAsync(p => postID == p.PostID);
        if (post == null)
        {
            return null;
        }
        post.Content = content;
        await _dbContext.SaveChangesAsync();
        return post;
    }

    public async Task<PostVote?> AddPostVote(PostVoteInputDTO dto)
    {
        Post? post = await _dbContext.Posts.SingleOrDefaultAsync(p => dto.PostID == p.PostID);
        if(post == null)
        {
            return null;
        }
        PostVote postVote = dto.Convert();
        await _dbContext.PostVotes.AddAsync(postVote);
        await _dbContext.SaveChangesAsync();
        return postVote;
    }

    public async Task<bool> DeletePostVote(int postID, int userID)
    {
        PostVote? postVote = await _dbContext.PostVotes.SingleOrDefaultAsync(pv => pv.PostID == postID && pv.UserID == userID);
        if(postVote == null)
        {
            return false;
        }
        _dbContext.PostVotes.Remove(postVote);
        await _dbContext.SaveChangesAsync();
        return true;
    }

    public async Task<PostVote?> UpdatePostVote(PostVoteInputDTO dto)
    {
        PostVote? postVote = await _dbContext.PostVotes.SingleOrDefaultAsync(pv => pv.PostID == dto.PostID && pv.UserID == dto.UserID);
        if (postVote != null)
        {
            postVote.Value = dto.Value;
            await _dbContext.SaveChangesAsync();
            return postVote;
        }
        return null;
    }
}

