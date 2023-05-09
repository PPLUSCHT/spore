using Microsoft.AspNetCore.Mvc;
using ThreadsAPI.DAL;
using ThreadsAPI.Models;

namespace ServerlessAPI.Controllers;

[Route("api/[controller]")]
public class SessionController:ControllerBase
{
    private readonly IUserCommandRepository _userCommandRepository;

    public SessionController(IUserCommandRepository userCommandRepository)
    {
        _userCommandRepository = userCommandRepository;
    }

    [HttpPost(Name = "Login")]
    public async Task<ActionResult<string>> IssueJWTAsync([FromBody] UserInputDTO userInputDTO)
    {
        string? jwt = await _userCommandRepository.Login(userInputDTO.UserName, userInputDTO.Password);
        if(jwt == null)
        {
            return StatusCode(401);
        }
        return Ok(jwt);
    }
}