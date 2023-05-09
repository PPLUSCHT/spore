using Microsoft.AspNetCore.Mvc;
using ThreadsAPI.DAL;
using ThreadsAPI.Models;
using ThreadsAPI.ServiceLayer;

namespace ServerlessAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class CommentsController : ControllerBase
{

    private readonly ICommentCommandRepository _commentCommandRepository;
    private readonly ICommentQueryRepository _commentQueryRepository;
    private readonly IJWTservice _jwtService;

    public CommentsController(ICommentCommandRepository commentCommandRepository,
                             ICommentQueryRepository commentQueryRepository,
                             IJWTservice jwtService)
    {
        _commentCommandRepository = commentCommandRepository;
        _commentQueryRepository = commentQueryRepository;
        _jwtService = jwtService;
    }

    [HttpPost(Name = "PostComment")]
    public async Task<ActionResult<CommentOutputDTO>> PostComment([FromBody] CommentInputDTO commentInputDTO)
    {
        IDHandling.MatchID(Request, commentInputDTO.UserID, _jwtService, out int? errorCode);
        if(errorCode != null)
        {
            return StatusCode((int)errorCode);
        }

        Comment comment = await _commentCommandRepository.PostComment(commentInputDTO);
        return Ok(comment.Convert(commentInputDTO.UserID));
    }

    [HttpGet("{commentId}", Name = "GetComment")]
    public async Task<ActionResult<CommentOutputDTO>> GetComment(int commentID)
    {
        int? userID = IDHandling.ExtractID(Request, _jwtService, out int? _);
        Comment? comment = await _commentQueryRepository.GetComment(commentID);
        if (comment == null)
        {
            return NotFound();
        }
        return Ok(comment.Convert(userID));
    }

    [HttpGet("{id}/Children", Name = "GetChildDTOs")]
    public async Task<ActionResult<List<CommentOutputDTO>>> GetComments(int id)
    {
        int? userID = IDHandling.ExtractID(Request, _jwtService, out int? _);
        List<CommentOutputDTO>? commentDTOs = await _commentQueryRepository.GetChildDTOs(id, userID);
        if (commentDTOs == null)
        {
            return StatusCode(404);
        }
        return commentDTOs;
    }

    [HttpPatch("{commentID}", Name = "UpdateComment")]
    public async Task<ActionResult<string>> UpdateComment([FromBody] CommentInputDTO inputDTO, int commentID)
    {
        IDHandling.MatchID(Request, inputDTO.UserID, _jwtService, out int? errorCode);
        if (errorCode != null)
        {
            return StatusCode((int)errorCode);
        }

        Comment? comment = await _commentQueryRepository.GetComment(commentID);

        if (comment == null)
        {
            return StatusCode(404);
        }

        if (comment.PosterID != inputDTO.UserID)
        {
            return StatusCode(403);
        }

        comment = await _commentCommandRepository.UpdateComment(commentID, inputDTO.Content);
        if (comment == null)
        {
            return StatusCode(500);
        }

        return Ok(inputDTO.Content);
    }

    [HttpDelete("{commentId}", Name = "DeleteComment")]
    public async Task<ActionResult<int>> DeleteComment(int commentID)
    {
        int? userID = IDHandling.ExtractID(Request, _jwtService, out int? errorCode);
        if (userID == null)
        {
            return StatusCode(errorCode == null ? 500 : (int) errorCode);
        }

        int status = await _commentCommandRepository.DeleteOrNullComment(commentID, (int)userID);
        if(status == 200)
        {
            return Ok(commentID);
        }
        return StatusCode(status);
    }

    [HttpPost("{CommentID}/Votes", Name = "PostCommentVote")]
    public async Task<ActionResult<CommentVoteOutputDTO>> PostCommentVote([FromBody] CommentVoteInputDTO VoteInputDTO)
    {
        IDHandling.MatchID(Request, VoteInputDTO.UserID, _jwtService, out int? errorCode);
        if (errorCode != null)
        {
            return StatusCode((int)errorCode);
        }

        CommentVote? commentVote = await _commentQueryRepository.GetUserVote(VoteInputDTO.CommentID, VoteInputDTO.UserID);
        if (commentVote != null)
        {
            return StatusCode(403);
        }

        commentVote = await _commentCommandRepository.AddCommentVote(VoteInputDTO);
        if (commentVote != null)
        {
            return Ok(commentVote.Convert());
        }

        return StatusCode(500);
    }

    [HttpPatch("{CommentID}/Votes", Name = "UpdateCommentVote")]
    public async Task<ActionResult<PostOutputDTO>> UpdateVote([FromBody] CommentVoteInputDTO voteInputDTO)
    {
        IDHandling.MatchID(Request, voteInputDTO.UserID, _jwtService, out int? errorCode);
        if (errorCode != null)
        {
            return StatusCode((int)errorCode);
        }

        CommentVote? commentVote = await _commentCommandRepository.UpdateCommentVote(voteInputDTO);
        if (commentVote == null)
        {
            return StatusCode(404);
        }

        return Ok(commentVote.Convert());
    }


    [HttpDelete("{CommentID}/Votes", Name = "DeleteCommentVote")]
    public async Task<ActionResult<CommentOutputDTO>> DeleteVote([FromBody] CommentVoteInputDTO vote)
    {
        IDHandling.MatchID(Request, vote.UserID, _jwtService, out int? errorCode);
        if (errorCode != null)
        {
            return StatusCode((int)errorCode);
        }

        bool success = await _commentCommandRepository.DeleteCommentVote(vote.CommentID, vote.UserID);
        if (success == true)
        {
            return Ok(vote);
        }
        return StatusCode(404);

    }
}