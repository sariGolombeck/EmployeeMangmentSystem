namespace Server.API.Models
{
    public class PositionEmployeePostModel
    {
        public int PositionId { get; set; }
        public int EmployeeId { get; set; }
        public DateTime EntryDateIntoOffice { get; set; }
        public bool Ismanagerial { get; set; }
    }
}
