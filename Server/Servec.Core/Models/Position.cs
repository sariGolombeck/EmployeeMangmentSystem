using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Server.Core.Entities
{
    public class Position
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public int Id { get; set; }
        public bool PositionStatus { get; set; }
    }
}
