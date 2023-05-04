using System;
using Microsoft.EntityFrameworkCore;
using ThreadsAPI.Models;

namespace ThreadsAPI.DAL;

public class ThreadsAPIContext: DbContext
{
    public ThreadsAPIContext(DbContextOptions<ThreadsAPIContext> options) : base(options)
    {
    }

    public DbSet<User> Users { get; set; }
    public DbSet<Post> Posts { get; set; }
    public DbSet<Comment> Comments { get; set; }
    public DbSet<PostVote> PostVotes { get; set; }
    public DbSet<CommentVote> CommentVotes { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<User>().ToTable("User");

        modelBuilder.Entity<Post>().ToTable("Post");

        modelBuilder.Entity<Comment>().ToTable("Comment");

        modelBuilder.Entity<PostVote>().ToTable("PostVote");
        modelBuilder.Entity<PostVote>()
            .HasOne(pv => pv.Post)
            .WithMany(p => p.Votes);

        modelBuilder.Entity<CommentVote>().ToTable("CommentVote");
        modelBuilder.Entity<CommentVote>()
            .HasOne(cv => cv.Comment)
            .WithMany(c => c.Votes);
    }
}

