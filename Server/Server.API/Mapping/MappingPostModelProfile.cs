using AutoMapper;
using Server.API.Models;
using Server.Core.Entities;
using Server.Core.Models;

namespace Server.API.Mapping
{
    public class MappingPostModelProfile:Profile
    {
        public MappingPostModelProfile()
        {
            CreateMap<EmployeePostModel,Employee >().ReverseMap();
            CreateMap<PositionPostModel, Position>().ReverseMap();
        CreateMap<PositionEmployeePostModel, PositionEmployee>().ReverseMap();
            CreateMap<UserPostModel, User>().ReverseMap();

        }
    }
}
