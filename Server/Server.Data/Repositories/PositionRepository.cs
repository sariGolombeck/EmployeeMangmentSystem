using Microsoft.EntityFrameworkCore;
using Server.Core.Entities;
using Server.Core.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Server.Data.Repositories
{
    public class PositionRepository : IPositionRepository
    {
        private readonly DataContext _context;
        public PositionRepository(DataContext dataContext)
        {
            _context = dataContext;
        }
        public async Task<Position> AddAsync(Position position)
        {
            _context.Positions.Add(position);
            await _context.SaveChangesAsync();
            return position;
        }
        public async Task<IEnumerable<Position>> GetAllAsync()
        {
            return await _context.Positions.ToListAsync();
        }
        public async Task<Position> GetByIdAsync(int id)
        {
            return await _context.Positions.Where(c => c.Id == id).FirstAsync();

        }

        public async Task<Position> UpdateAsync(Position position)
        {
           var w = _context.Positions.FirstOrDefault(c => c.Id == position.Id);
           await _context.SaveChangesAsync();
           return position;
        }
        public async Task DeleteAsync(int id)
        {
        var e=    _context.Positions.Where(i=>i.Id==id).FirstOrDefault();
             e.PositionStatus = false;
        }
        
    }




}

