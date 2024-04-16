using Server.Core.Repositories;
using System;
using Server.Core.Entities;
using Microsoft.VisualBasic;

using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Server.Data.Repositories
{
    public class EmployeeRepository : IEmployeeRepository
    {
        private readonly DataContext _context;
        public EmployeeRepository(DataContext dataContext)
        {
            _context = dataContext;
        }  
        public async Task<IEnumerable<Employee>> GetAllAsync()
        {
        return   await  _context.Employees.Where(x=>x.Status).ToListAsync();
        }
        public async Task<Employee> AddAsync(Employee employee)
        {
      await      _context.Employees.AddAsync(employee);
            await _context.SaveChangesAsync();
            return employee;
        }
    
        public async Task<Employee> GetByIdAsync(int id)
        {
            return await _context.Employees
                        .FirstOrDefaultAsync(c => c.Id == id);
        }
        public async Task<Employee> UpdateAsync(Employee employee)
        {
            var e = await _context.Employees.FirstOrDefaultAsync(e => e.Id == employee.Id);

            if (e == null)
            {
                return null;
            }
            e.FirstName = employee.FirstName;
            e.LastName = employee.LastName;
            e.Identity = employee.Identity;
            e.Gender = employee.Gender;
            e.BirthDate = employee.BirthDate;
            e.StartOfWorkDate = employee.StartOfWorkDate;

            await _context.SaveChangesAsync();
            return e;

        }


        public async Task DeleteAsync(int id)
        {
            // Find the employee entity to be deleted
            var employeeToDelete = await _context.Employees.FirstOrDefaultAsync(c => c.Id == id);

            // Handle the case where the employee is not found
            if (employeeToDelete == null)
            {
                throw new KeyNotFoundException($"Employee with ID {id} not found for deletion.");
            }

            // Remove the employee from the context
            employeeToDelete.Status = false;
            // Save the changes to the database
            await _context.SaveChangesAsync();
        }
  



    }
}
