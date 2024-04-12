using Server.Core.Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Server.Core.Repositories
{
    public interface IPositionEmployeeRepository
    {
        Task<IEnumerable<PositionEmployee>> GetPositionsEmployeeAsync(int employeeId);
        Task<PositionEmployee> GetPositionsEmployeeByIdAsync(int employeeId, int positionId);
        Task<IEnumerable<PositionEmployee>> GetPositionsEmployeeWithEntryTimeAsync();

        Task<PositionEmployee> AddPositionToEmployeeAsync(PositionEmployee employeePosition);
        Task<bool> DeletePositionFromEmployeeAsync(int employeeId, int positionId);
        Task<PositionEmployee> UpdatePositionToEmployeeAsync(int employeeId, int positionId, PositionEmployee employeePosition);
    }
}
