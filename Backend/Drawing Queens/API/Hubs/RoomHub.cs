using API.Hubs.Clients;
using Domain;
using Microsoft.AspNetCore.SignalR;

namespace API.Hubs
{
    public class RoomHub : Hub<IChatClient>
    {
        public async Task AddToRoom(string roomName, string playerName)
        {
            await Groups.AddToGroupAsync(Context.ConnectionId, roomName);

            await Clients.Group(roomName).SendJoin(new ChatMessage { User = "System", Message = $"{playerName} has joined" });
        }

        public async Task RemoveFromRoom(string roomName, string playerName)
        {
            await Groups.RemoveFromGroupAsync(Context.ConnectionId, roomName);

            await Clients.Group(roomName).SendLeave(new ChatMessage { User = "System", Message = $"{playerName} has joined" });
        }

        public async Task SendMessage(string roomName, ChatMessage message)
        {
            await Clients.Group(roomName).ReceiveMessage(message);
        }

    }
}
