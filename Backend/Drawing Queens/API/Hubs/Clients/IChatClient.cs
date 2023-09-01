namespace API.Hubs.Clients
{
    public interface IChatClient
    {
        Task ReceiveMessage(ChatMessage message);
        Task SendJoin(ChatMessage message);
        Task SendLeave(ChatMessage message);
    }
}
