
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Server.Core.Entities
{
  public  enum Gender
    {
        MALE = 0,
        FEMALE =1,
    }
    public class Employee
    {  
        public int Id { get; set; }
        public bool Status { get; set; } = true;
        
        public string Identity { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public DateTime BirthDate { get; set; }
        public Gender Gender { get; set; } = 0;
        public DateTime StartOfWorkDate { get; set; }


    }
}
