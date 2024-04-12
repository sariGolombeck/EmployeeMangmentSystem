//using Servec.Core.Services;
//using Server.Core.Entities;
//using Server.Core.Repositories;
//using Server.Core.Services;
//using System;
//using System.Collections.Generic;
//using System.Linq;
//using System.Text;
//using System.Threading.Tasks;

//namespace Server.Service.Services
//{

//namespace Server.Service.Services
//    {
//        public class PositionNameService : IPositionNameService // Interface name starts with uppercase
//        {
//            private readonly IPositionNameRepository _positionRepository;

//            public PositionNameService(IPositionNameRepository positionRepository)
//            {
//                _positionRepository = positionRepository;
//            }

//            public async Task<IEnumerable<PositionName>> GetAllAsync()
//            {
//                return await _positionRepository.GetAllAsync();
//            }

//            public async Task<PositionName> GetByIdAsync(int positionId) // Use positionId for consistency
//            {
//                return await _positionRepository.GetByIdAsync(positionId);
//            }

//            public async Task<PositionName> UpdateAsync(PositionName position)
//            {
//                return await _positionRepository.UpdateAsync(position);
//            }

//            public async Task DeleteAsync(int id) // Reuse the existing DeleteAsync method
//            {
//                await _positionRepository.DeleteAsync(id);
//            }

//            public async Task<PositionName> AddAsync(PositionName position)
//            {
//                return await _positionRepository.AddAsync(position);
//            }
//        }
//    }



//}

