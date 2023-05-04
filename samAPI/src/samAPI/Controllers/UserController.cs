using Microsoft.AspNetCore.Mvc;
using ThreadsAPI.DAL;
using ThreadsAPI.Models;
using ThreadsAPI.ServiceLayer;

namespace ServerlessAPI.Controllers;

[Route("api/[controller]")]
public class UsersController : ControllerBase
{
    private readonly IUserCommandRepository _userCommandRepository;
    private readonly IUserQueryRepository _userQueryRepository;
    private readonly IJWTservice _jwtService;

    public UsersController(IUserQueryRepository userQueryRepository,
                           IUserCommandRepository userCommandRepository,
                           IJWTservice jWTservice)
    {
        _userCommandRepository = userCommandRepository;
        _userQueryRepository = userQueryRepository;
        _jwtService = jWTservice;
    }

    [HttpGet(Name = "GetUsers")]
    public async IAsyncEnumerable<UserOutputDTO> GetUsersAsync()
    {
        List<User> users = await _userQueryRepository.GetUsers();
        foreach (User user in users)
        {
            yield return user.Convert();
        }
    }

    [HttpPost(Name = "PostUser")]
    public async Task<ActionResult<UserOutputDTO>> PostUserAsync(UserInputDTO userInputDTO)
    {
        User? user = await _userCommandRepository.CreateUser(userInputDTO);
        if(user == null)
        {
            return StatusCode(500);
        }
        return Ok(user.Convert());
    }

    [HttpDelete(Name = "DeleteUser")]
    public async Task<ActionResult<int>> DeleteUserAsync(int deleteID)
    {
        IDHandling.MatchID(Request, deleteID, _jwtService, out int? errorCode);
        if(errorCode != null)
        {
            return StatusCode((int) errorCode);
        }

        bool worked = await _userCommandRepository.DeleteUser(deleteID);
        if(worked == false)
        {
            return StatusCode(500);
        }
        // ReSharper disable once HeapView.BoxingAllocation
        return Ok(deleteID);
    }

    [HttpGet("{userID}")]
    public async Task<ActionResult<UserOutputDTO>> GetUserAsync(int userID)
    {
        User? user = await _userQueryRepository.GetUser(userID);
        if(user == null)
        {
            return NotFound();
        }
        return Ok(user.Convert());
    }

    [HttpGet("search")]
    public async IAsyncEnumerable<UserOutputDTO> QueryUsers(string search)
    {
        List<User> users = await _userQueryRepository.GetUsersThatStartWith(search);
        foreach (User user in users)
        {
            yield return user.Convert();
        }
    }

    [HttpGet("unique")]
    public async Task<bool> CheckUser(string username)
    {
        bool unique = await _userQueryRepository.CheckIfUsernameExists(username);
        return !unique;
    }
}