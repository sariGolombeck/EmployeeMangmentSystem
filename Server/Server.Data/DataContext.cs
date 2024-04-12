using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Migrations;
using Server.Core.Entities;
using Server.Core.Models;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Server.Data
{
    public class DataContext:DbContext
    {
        public DbSet<Employee> Employees { get; set; }
        public DbSet<Position> Positions { get; set; }
        public DbSet<PositionEmployee> PositionEmployee { get; set; }
        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<PositionEmployee>()
              
                .HasKey(pe => new { pe.EmployeeId, pe.PositionId });
            modelBuilder.Entity<User>().HasData(
    new User { Id=1, Name = "systemDeveloper", Password = "1111" },
    new User {Id=2, Name = "employeesManager", Password = "1234" }
);
        }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=employee_management_system");
            optionsBuilder.LogTo((message) => Debug.Write(message));
        }

    }
}
