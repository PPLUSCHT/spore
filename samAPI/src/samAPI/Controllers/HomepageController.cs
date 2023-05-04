using Microsoft.AspNetCore.Mvc;
using ThreadsAPI.DAL;
using ThreadsAPI.Models;
using ThreadsAPI.ServiceLayer;

namespace ServerlessAPI.Controllers;

[ApiController]
[Route("api/[controller]")]
public class HomepageController : ControllerBase
{
    private IPostQueryRepository _postQueryRepository;
    private readonly IJWTservice _jwtService;

    public HomepageController(IPostQueryRepository postQueryRepository,
                             IJWTservice jwtService)
    {
        _postQueryRepository = postQueryRepository;
        _jwtService = jwtService;
    }

    [HttpGet("AllTime/{page}")]
    public async Task<ActionResult<List<PostOutputDTO>?>> GetTopAllTime(int page)
    {
        int? userID = IDHandling.ExtractID(Request, _jwtService, out int? _);
        List<PostOutputDTO>? postDTOs = await _postQueryRepository.GetTopAllTime(userID, page);
        if (postDTOs == null)
        {
            return StatusCode(404);
        }
        return postDTOs;
    }

    [HttpGet("Today/{page}")]
    public async Task<ActionResult<List<PostOutputDTO>?>> GetTopToday(int page)
    {
        int? userID = IDHandling.ExtractID(Request, _jwtService, out int? _);
        List<PostOutputDTO>? postDTOs = await _postQueryRepository.GetTopToday(userID, page);
        if (postDTOs == null)
        {
            return StatusCode(404);
        }
        return postDTOs;
    }

    [HttpGet("Week/{page}")]
    public async Task<ActionResult<List<PostOutputDTO>?>> GetTopWeek(int page)
    {
        int? userID = IDHandling.ExtractID(Request, _jwtService, out int? _);
        List<PostOutputDTO>? postDTOs = await _postQueryRepository.GetTopWeek(userID, page);
        if (postDTOs == null)
        {
            return StatusCode(404);
        }
        return postDTOs;
    }

    [HttpGet("Month/{page}")]
    public async Task<ActionResult<List<PostOutputDTO>?>> GetTopMonth(int page)
    {
        int? userID = IDHandling.ExtractID(Request, _jwtService, out int? _);
        List<PostOutputDTO>? postDTOs = await _postQueryRepository.GetTopMonth(userID, page);
        if (postDTOs == null)
        {
            return StatusCode(404);
        }
        return postDTOs;
    }

    [HttpGet("Year/{page}")]
    public async Task<ActionResult<List<PostOutputDTO>?>> GetTopYear(int page)
    {
        int? userID = IDHandling.ExtractID(Request, _jwtService, out int? _);
        List<PostOutputDTO>? postDTOs = await _postQueryRepository.GetTopYear(userID, page);
        if (postDTOs == null)
        {
            return StatusCode(404);
        }
        return postDTOs;
    }
}
