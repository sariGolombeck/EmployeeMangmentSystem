using AutoMapper; // בהנחת מרחב השמות ברירת מחדל של AutoMapper
using Server.Core.DTOs;
using Server.Core.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Server.Core.Mapping
{
    public class MappingProfile : Profile
    {
        public MappingProfile()
        {
             CreateMap<PositionDto, Position>().ReverseMap();

            CreateMap<EmployeeDto, Employee>().ReverseMap();
            CreateMap<PositionEmployeeDto, PositionEmployee>().ReverseMap();



        }
    }
}
