using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Domain
{
    public class Room
    {
        public string Name { get; set; } = string.Empty;
        public int MaxPlayers { get; set; }
        public int Rounds { get; set; }
        public int RoundTime { get; set; }
        public List<Player> Players { get; set; } = new List<Player>();
    }
}
