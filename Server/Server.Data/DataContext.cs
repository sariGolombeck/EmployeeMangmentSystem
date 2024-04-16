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
    public class DataContext : DbContext
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
    new User { Id = 1, Name = "systemDeveloper", Password = "1111" },
    new User { Id = 2, Name = "employeesManager", Password = "1234" }
);
            modelBuilder.Entity<Employee>().HasData(
            new Employee { Id = 1, Identity = "123456789", FirstName = "John", LastName = "Doe", BirthDate = new DateTime(1990, 5, 15), StartOfWorkDate = new DateTime(2010, 8, 20) },
            new Employee { Id = 2, Identity = "987654321", FirstName = "Jane", LastName = "Smith", BirthDate = new DateTime(1985, 10, 25), StartOfWorkDate = new DateTime(2008, 6, 10) },
            new Employee { Id = 3, Identity = "567891234", FirstName = "Michael", LastName = "Johnson", BirthDate = new DateTime(1982, 3, 8), StartOfWorkDate = new DateTime(2005, 9, 5) },
            new Employee { Id = 4, Identity = "345678912", FirstName = "Emily", LastName = "Williams", BirthDate = new DateTime(1995, 12, 3), StartOfWorkDate = new DateTime(2012, 4, 15) },
            new Employee { Id = 5, Identity = "789123456", FirstName = "David", LastName = "Brown", BirthDate = new DateTime(1978, 7, 20), StartOfWorkDate = new DateTime(2003, 11, 30) },
            new Employee { Id = 6, Identity = "654321789", FirstName = "Sarah", LastName = "Jones", BirthDate = new DateTime(1991, 9, 18), StartOfWorkDate = new DateTime(2015, 2, 8) },
            new Employee { Id = 7, Identity = "432189765", FirstName = "Daniel", LastName = "Martinez", BirthDate = new DateTime(1987, 2, 11), StartOfWorkDate = new DateTime(2006, 7, 22) },
            new Employee { Id = 8, Identity = "876543219", FirstName = "Jessica", LastName = "Garcia", BirthDate = new DateTime(1980, 6, 27), StartOfWorkDate = new DateTime(2002, 10, 12) },
            new Employee { Id = 9, Identity = "918273645", FirstName = "Christopher", LastName = "Lee", BirthDate = new DateTime(1975, 11, 10), StartOfWorkDate = new DateTime(1998, 5, 18) },
            new Employee { Id = 10, Identity = "219876543", FirstName = "Amanda", LastName = "Taylor", BirthDate = new DateTime(1989, 4, 5), StartOfWorkDate = new DateTime(2018, 8, 25) },
            new Employee { Id = 11, Identity = "654987321", FirstName = "Matthew", LastName = "Anderson", BirthDate = new DateTime(1993, 8, 30), StartOfWorkDate = new DateTime(2009, 3, 12) }
            );
            modelBuilder.Entity<Position>().HasData(

                new Position { Id = 1, Name = "Software Developer", Description = "Responsible for developing and maintaining software applications." },
                new Position { Id = 2, Name = "Marketing Manager", Description = "Oversees the marketing department and develops marketing strategies." },
                new Position { Id = 3, Name = "Financial Analyst", Description = "Analyzes financial data and provides insights to support decision-making." },
                new Position { Id = 4, Name = "HR Coordinator", Description = "Handles administrative tasks within the human resources department." },
                new Position { Id = 5, Name = "Customer Service Representative", Description = "Assists customers with inquiries, complaints, and product/service information." }
                );
        }


        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=employee_management_system");
            optionsBuilder.LogTo((message) => Debug.Write(message));
        }

    }
}
