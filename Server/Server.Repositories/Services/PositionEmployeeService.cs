using EmployeesManagementServer.Core.Services;
using Server.Core.Entities;
using Server.Core.Repositories;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace EmployeesManagementServer.Service.Services
{
    public class PositionEmployeeService :IPositionEmployeeService
    {
        private readonly IPositionEmployeeRepository _positionEmployeeRepository;
        private readonly IEmployeeRepository _employeeRepository;
        public PositionEmployeeService(IPositionEmployeeRepository positionEmployeeRepository, IEmployeeRepository employeeRepository)
        {
            _positionEmployeeRepository = positionEmployeeRepository;
            _employeeRepository = employeeRepository;
        }

        public async Task<PositionEmployee> AddPositionToEmployeeAsync(int employeeId, PositionEmployee positionEmployee)
        {
            positionEmployee.EmployeeId = employeeId;
            if (await _employeeRepository.GetByIdAsync(employeeId) != null)
            {
                var okTime = await _employeeRepository.GetByIdAsync(employeeId);
                if (okTime.startOfWorkDate <= positionEmployee.EntryDateIntoOffice)
                    return await _positionEmployeeRepository.AddPositionToEmployeeAsync(positionEmployee);
            }
            return null;

        }

        public async Task<bool> DeletePositionOfEmployeeAsync(int employeeId, int positionId)
        {
            return await _positionEmployeeRepository.DeletePositionFromEmployeeAsync(employeeId, positionId);
        }

        public async Task<IEnumerable<PositionEmployee>> GetEmployeePositionsAsync(int employeeId)
        {
            return await _positionEmployeeRepository.GetPositionsEmployeeAsync(employeeId);
        }

        public async Task<PositionEmployee> UpdatePositionToEmployeeAsync(int employeeId, int positionId, PositionEmployee positionEmployee)
        {
            return await _positionEmployeeRepository.UpdatePositionToEmployeeAsync(employeeId, positionId, positionEmployee);
        }

        public async Task<PositionEmployee> GetEmployeePositionByIdAsync(int employeeId, int positionId)
        {
            return await _positionEmployeeRepository.GetPositionsEmployeeByIdAsync(employeeId, positionId);
        }
        public async Task<IEnumerable<PositionEmployee>> GetEarliestEntryEmployeesAsync()
        {
            return  await _positionEmployeeRepository.GetPositionsEmployeeWithEntryTimeAsync();
        }

    }
}
