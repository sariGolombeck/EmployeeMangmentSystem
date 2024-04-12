using Server.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Server.Core.Repositories
{
    public interface IEmployeeRepository
    {
    Task<IEnumerable<Employee>> GetAllAsync();
    Task<Employee> GetByIdAsync(int id);
    //Task<Worker> AddWorkerAsync(Worker worker);
    Task<Employee> AddAsync(Employee employee);
   // Task<Worker> UpdateWorkerAsync(string name);
    Task<Employee> UpdateAsync(Employee employee);
    Task DeleteAsync(int identity);

    }
}
