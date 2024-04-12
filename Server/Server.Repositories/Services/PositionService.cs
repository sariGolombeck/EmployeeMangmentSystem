using Server.Core.Repositories;
using Server.Core.Entities; // Assuming Position is defined here
using Server.Core.Repositories; // Assuming IPositionRepository is defined here
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Servec.Core.Services;
namespace Server.Service.Services
{
    public class PositionService : IPositionService // Interface name starts with uppercase
    {
        private readonly IPositionRepository _positionRepository;

        public PositionService(IPositionRepository positionRepository)
        {
            _positionRepository = positionRepository;
        }

        public async Task<IEnumerable<Position>> GetAllAsync()
        {
            return await _positionRepository.GetAllAsync();
        }

        public async Task<Position> GetByIdAsync(int positionId) // Use positionId for consistency
        {
            return await _positionRepository.GetByIdAsync(positionId);
        }

        public async Task<Position> UpdateAsync(Position position)
        {
            return await _positionRepository.UpdateAsync(position);
        }

        public async Task DeleteAsync(int id) // Reuse the existing DeleteAsync method
        {
            await _positionRepository.DeleteAsync(id);
        }

        public async Task<Position> AddAsync(Position position)
        {
            return await _positionRepository.AddAsync(position);
        }
    }
}
