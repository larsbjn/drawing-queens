using Application.Interfaces.Services;
using Domain;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [ApiController]
    public class RoomController : Controller
    {
        private readonly IRoomService _roomService;

        public RoomController(IRoomService roomService) {
            _roomService = roomService;
        }
        
        [HttpPost]
        [Route("api/[controller]")]
        public IActionResult CreateRoom(Room room)
        {
            return _roomService.CreateRoom(room) ? Created(nameof(GetRoom), room) : BadRequest();
        }

        [HttpGet]
        [Route("api/[controller]/{Name}")]
        public IActionResult GetRoom(string Name)
        {
            var room = _roomService.GetRoom(Name);
            return room == null ? NotFound() : Ok(room);
        }

        [HttpGet]
        [Route("api/[controller]")]
        public IActionResult GetAllRooms()
        {
            return Ok(_roomService.GetAllRooms());
        }
    }
}
