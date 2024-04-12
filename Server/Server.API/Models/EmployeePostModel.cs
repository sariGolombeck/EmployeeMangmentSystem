using Server.Core.Entities;

namespace Server.API.Models
{
    public class EmployeePostModel
    {
        public string Identity { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
       public  DateTime BirthDate { get; set; }
        public Gender Gender { get; set; }
        public DateTime startOfWorkDate { get; set; }

    }
}
