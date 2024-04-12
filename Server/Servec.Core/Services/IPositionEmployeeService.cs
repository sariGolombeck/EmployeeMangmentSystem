using Server.Core.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace EmployeesManagementServer.Core.Services
{
    public interface IPositionEmployeeService
    {
        Task<PositionEmployee> AddPositionToEmployeeAsync(int employeeId, PositionEmployee positionEmployee);
        Task<PositionEmployee> UpdatePositionToEmployeeAsync(int employeeId, int positionId, PositionEmployee positionEmployee);
        Task<bool> DeletePositionOfEmployeeAsync(int employeeId, int positionId);
        Task<IEnumerable<PositionEmployee>> GetEmployeePositionsAsync(int employeeId);
        Task<PositionEmployee> GetEmployeePositionByIdAsync(int employeeId, int positionId);
        Task<IEnumerable<PositionEmployee>> GetEarliestEntryEmployeesAsync();

    }
}
