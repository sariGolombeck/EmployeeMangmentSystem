using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Server.Core.Entities
{
    public class PositionEmployee
    {
        public int EmployeeId { get; set; }
        public Employee Employee { get; set; }
        public int PositionId { get; set; }
        public Position Position { get; set; }
        public DateTime EntryDateIntoOffice { get; set; }
        public bool Ismanagerial { get; set; }
        public bool Status { get; set; }
        public PositionEmployee()
        {
            Status = true;
        }
    }
}
