using Application.Interfaces.Repositories;
using Application.Interfaces.Services;
using Domain;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Application.Services
{
    public class RoomService : IRoomService
    {

        private readonly IRoomRepository _roomRepository;

        public RoomService(IRoomRepository roomRepository) { _roomRepository = roomRepository; }

        public bool CreateRoom(Room room)
        {
            if (_roomRepository.GetRoom(room.Name) != null)
            {
                return false;
            }
            _roomRepository.AddRoom(room);
            return true;
        }

        public Room? GetRoom(string name)
        {
            return _roomRepository.GetRoom(name);
        }

        public IEnumerable<Room> GetAllRooms() {  
            return _roomRepository.GetAllRooms(); 
        }
    }
}
