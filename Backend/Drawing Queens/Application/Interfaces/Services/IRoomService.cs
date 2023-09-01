using Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Interfaces.Services
{
    public interface IRoomService
    {
        public bool CreateRoom(Room room);
        public Room? GetRoom(string name);
        public IEnumerable<Room> GetAllRooms();
    }
}
