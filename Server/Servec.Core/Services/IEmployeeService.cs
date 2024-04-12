using Server.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Servec.Core.Services
{
    public interface IEmployeeService
    {


        Task<IEnumerable<Employee>> GetAllAsync();
        Task<Employee> GetByIdAsync(int workerId);
        //Task<Worker> AddWorkerAsync(Worker worker);
        Task <Employee> AddAsync(Employee worker);
        //Task<Worker> UpdateWorkerAsync(string name);
        Task<Employee> UpdateAsync(int id ,Employee worker);
        Task DeleteAsync(int workerId);
    }
}
