
using Microsoft.EntityFrameworkCore;
using Server.Core.Entities;
using Server.Core.Repositories;
using Server.Data;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace EmployeeManagement.Data.Repositories
{
    public class PositionEmployeeRepository : IPositionEmployeeRepository
    {
        private readonly DataContext _context;
        public PositionEmployeeRepository(DataContext context)
        {
            _context = context;
        }
        public async Task<IEnumerable<PositionEmployee>> GetPositionsEmployeeAsync(int employeeId)
        {
            var positions = await _context.PositionEmployee
                .Where(e => e.EmployeeId == employeeId && e.Status)
                .Include(p => p.Position)
                .Include(p2 => p2.Employee)
                .ToListAsync();

            return  positions.Any() ? positions : null;
        }

        public async Task<PositionEmployee> GetPositionsEmployeeByIdAsync(int employeeId, int positionId)
        {
            return await _context.PositionEmployee.FirstOrDefaultAsync(emp => emp.EmployeeId == employeeId && emp.PositionId == positionId);
        }
        public async Task<PositionEmployee> AddPositionToEmployeeAsync(PositionEmployee employeePosition)
        {
            // בדיקה האם התפקיד כבר קיים בטבלה והשדה IsActive הוא false
            var existingPosition = await _context.PositionEmployee
                .FirstOrDefaultAsync(ep => ep.EmployeeId == employeePosition.EmployeeId
                                          && ep.PositionId == employeePosition.PositionId
                                          && ep.Status == false);

            if (existingPosition != null)
                return await UpdatePositionToEmployeeAsync(employeePosition.EmployeeId, employeePosition.PositionId, employeePosition);


            // אם התפקיד אינו קיים בטבלה או שהוא כבר פעיל, נוסיף אותו בצורה רגילה
            await _context.PositionEmployee.AddAsync(employeePosition);
            await _context.SaveChangesAsync();
            return employeePosition;
        }

        public async Task<bool> DeletePositionFromEmployeeAsync(int employeeId, int positionId)
        {
            var deletedPosition = await _context.PositionEmployee.FirstOrDefaultAsync(e => e.EmployeeId == employeeId && e.PositionId == positionId);
            if (deletedPosition != null)
            {
                deletedPosition.Status = false;
                await _context.SaveChangesAsync();
                return true;
            }
            return false;
        }

        public async Task<PositionEmployee> UpdatePositionToEmployeeAsync(int employeeId, int positionId, PositionEmployee employeePosition)
        {

            var updatePosition = await _context.PositionEmployee.FirstOrDefaultAsync(e => e.EmployeeId == employeeId && e.PositionId == positionId);

            if (updatePosition == null)
            {
                return null;
            }
            updatePosition.Status = true;
            updatePosition.EntryDateIntoOffice = employeePosition.EntryDateIntoOffice;
            updatePosition.Ismanagerial = employeePosition.Ismanagerial;
            await _context.SaveChangesAsync();
            return updatePosition;
        }
        public async Task<IEnumerable<PositionEmployee>> GetPositionsEmployeeWithEntryTimeAsync()
        {
            // קבל את כל זמני הכניסה המוקדמים ביותר לכל עובד בכל תפקיד
            var earliestEntryDates = await _context.PositionEmployee
                .GroupBy(pe => pe.EmployeeId)
                .Select(g => new
                {
                    EmployeeId = g.Key,
                    EarliestEntryDate = g.Min(pe => pe.EntryDateIntoOffice)
                })
                .ToListAsync();

            // בחר את הזמן המוקדם ביותר מבין כל העובדים
            return (IEnumerable<PositionEmployee>)earliestEntryDates;
        }
    }
}
