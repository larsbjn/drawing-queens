using Application.Interfaces.Repositories;
using Domain;

namespace Infrastructure.Repositories
{
    public class RoomRepository : IRoomRepository
    {
        private static List<Room> rooms = new List<Room>();

        public void AddRoom(Room room)
        {
            rooms.Add(room);
        }

        public IEnumerable<Room> GetAllRooms()
        {
            return rooms;
        }

        public Room? GetRoom(string Name)
        {
            return rooms.FirstOrDefault(room => room.Name == Name);
        }
    }
}
