using Microsoft.AspNetCore.Mvc;
using ThreadsAPI.DAL;
using ThreadsAPI.Models;
using ThreadsAPI.ServiceLayer;

namespace ServerlessAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class PostsController : ControllerBase
{

    private readonly IPostQueryRepository _postQueryRepository;
    private readonly IPostCommandRepository _postCommandRepository;
    private readonly IJWTservice _jwtService;

    public PostsController(IPostQueryRepository postQueryRepository,
                           IPostCommandRepository postCommandRepository,
                           IJWTservice jwtService)
    {
        _postQueryRepository = postQueryRepository;
        _postCommandRepository = postCommandRepository;
        _jwtService = jwtService;
    }

    [HttpPost(Name = "PostPost")]
    public async Task<ActionResult<PostOutputDTO>> PostPostAsync([FromBody] PostInputDTO PostInputDTO)
    {
        IDHandling.MatchID(Request, PostInputDTO.UserID, _jwtService, out int? errorCode);
        if (errorCode != null)
        {
            return StatusCode((int) errorCode);
        }
        Post post = await _postCommandRepository.PostPost(PostInputDTO);
        return Ok(post.Convert(PostInputDTO.UserID));
    }

    [HttpGet(Name = "GetPosts")]
    public async IAsyncEnumerable<PostOutputDTO> QueryPostsAsync(string query, int pageNumber)
    {
        int? userID = IDHandling.ExtractID(Request, _jwtService, out _);
        List<PostOutputDTO>? posts = await _postQueryRepository.GetPostsContaining(query, userID, pageNumber);
        if (posts == null)
        {
            yield break;
        }
        foreach (PostOutputDTO post in posts)
        {
            yield return post;
        }
    }

    [HttpGet("{id}")]
    public async Task<ActionResult<PostOutputDTO>> GetPostByIDAsync(int id)
    {
        int? userID = IDHandling.ExtractID(Request, _jwtService, out int? _);
        Post? post = await _postQueryRepository.GetPost(id);
        if (post == null)
        {
            return StatusCode(404);
        }

        return post.Convert(userID);
    }

    [HttpGet("{id}/Comments", Name = "GetCommentsFromPost")]
    public async Task<ActionResult<List<CommentOutputDTO>>> GetComments(int id)
    {
        int? userID = IDHandling.ExtractID(Request, _jwtService, out int? _);
        List<CommentOutputDTO>? commentDTOs = await _postQueryRepository.GetChildDTOs(id, userID);
        if (commentDTOs == null)
        {
            return StatusCode(404);
        }
        return commentDTOs;
    }

    [HttpPatch("{id}")]
    public async Task<ActionResult<string>> UpdatePost([FromBody] PostInputDTO postInputDTO, int id)
    {
        IDHandling.MatchID(Request, postInputDTO.UserID, _jwtService, out int? errorCode);
        if (errorCode != null)
        {
            return StatusCode((int)errorCode);
        }

        Post? post = await _postQueryRepository.GetPost(id);
        if (post == null)
        {
            return StatusCode(404);
        }

        if (post.PosterID != postInputDTO.UserID)
        {
            return StatusCode(403);
        }

        post = await _postCommandRepository.UpdatePost(id, postInputDTO.Content);
        if (post == null)
        {
            return StatusCode(500);
        }

        return Ok(postInputDTO.Content);

    }

    [HttpDelete("{id}", Name = "DeletePost")]
    public async Task<ActionResult<int>> DeletePostAsync(int id)
    {
        int? userID = IDHandling.ExtractID(Request, _jwtService, out int? errorCode);
        if (errorCode != null)
        {
            return StatusCode((int)errorCode);
        }

        if (userID == null)
        {
            return StatusCode(500);
        }

        int status = await _postCommandRepository.DeletePost(id, (int)userID);
        if(status == 200)
        {
            return Ok(id);
        }
        return StatusCode(status);
    }

    [HttpPost("{id}/Votes")]
    public async Task<ActionResult<PostVoteOutputDTO>> PostVote([FromBody] PostVoteInputDTO VoteInputDTO)
    {
        IDHandling.MatchID(Request, VoteInputDTO.UserID, _jwtService, out int? errorCode);
        if (errorCode != null)
        {
            return StatusCode((int)errorCode);
        }

        PostVote? postVote = await _postQueryRepository.GetUserVote(VoteInputDTO.PostID, VoteInputDTO.UserID);
        if (postVote != null)
        {
            return StatusCode(403);
        }

        postVote = await _postCommandRepository.AddPostVote(VoteInputDTO);
        if (postVote != null)
        {
            return Ok(postVote.Convert());
        }

        return StatusCode(500);
    }

    [HttpPatch("{id}/Votes")]
    public async Task<ActionResult<PostOutputDTO>> UpdateVote([FromBody] PostVoteInputDTO voteInputDTO)
    {
        IDHandling.MatchID(Request, voteInputDTO.UserID, _jwtService, out int? errorCode);
        if (errorCode != null)
        {
            return StatusCode((int)errorCode);
        }

        PostVote? postVote = await _postCommandRepository.UpdatePostVote(voteInputDTO);
        if (postVote == null)
        {
            return StatusCode(404);
        }
        return Ok(postVote);
    }


    [HttpDelete("{id}/Votes")]
    public async Task<ActionResult<PostOutputDTO>> DeleteVote([FromBody] PostVoteInputDTO vote)
    {
        IDHandling.MatchID(Request, vote.UserID, _jwtService, out int? errorCode);
        if (errorCode != null)
        {
            return StatusCode((int)errorCode);
        }

        bool success = await _postCommandRepository.DeletePostVote(vote.PostID, vote.UserID);
        if (success == true)
        {
           return Ok(vote);
        }
        return StatusCode(404);

    }

    [HttpGet("Suggested")]
    public async Task<ActionResult<List<PostTitleDTO>?>> GetSuggestedPosts(string query)
    {
        return await _postQueryRepository.GetSuggestedResults(query);
    }

}