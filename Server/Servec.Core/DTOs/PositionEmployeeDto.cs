using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Server.Core.DTOs
{
    public class PositionEmployeeDto
    {
        public int EmployeeId { get; set; }

        public int PositionId { get; set; }
        public DateTime EntryDateIntoOffice { get; set; }
        public bool Ismanagerial { get; set; }
    }
}
