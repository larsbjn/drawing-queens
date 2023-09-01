using Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Interfaces.Repositories
{
    public interface IRoomRepository
    {
        public void AddRoom(Room room);
        public IEnumerable<Room> GetAllRooms();
        public Room? GetRoom(string Name);
    }
}
