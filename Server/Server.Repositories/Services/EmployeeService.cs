//using AutoMapper;
//using EmployeesManagementServer.Core.Services;
//using Microsoft.AspNetCore.Mvc;
//using Servec.Core.Services;
//using Server.API.Models;
//using Server.Core.DTOs;
//using Server.Core.Entities;

//// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860
//namespace Server.API.Controllers
//{
//    [Route("api/[controller]")]
//    [ApiController]
//    public class EmployeeController : ControllerBase
//    {
//        private readonly IPositionEmployeeService _positionEmployeeService;
//        private readonly IEmployeeService _workerService;
//        private readonly IMapper _mapper;
//        // GET: api/<WorkerController>
//        public EmployeeController(IEmployeeService workerService,IMapper mapper,IPositionEmployeeService positionEmployeeService)
//        {
//            _workerService = workerService;
//            _mapper = mapper;
//            _positionEmployeeService = positionEmployeeService;
//        }
//        [HttpGet]
//        public async Task<ActionResult> Get()
//        {
//            var workers = await _workerService.GetAllAsync();
//            if (workers is null)
//                return NotFound();
//            return Ok(_mapper.Map<IEnumerable<EmployeeDto>>(workers));
//        }

//        //[HttpGet]
//        //public async Task<ActionResult> Get()
//        //{
//        //    var workers = await _workerService.GetAllAsync();
//        //    if (workers is null)
//        //        return NotFound();
//        //    return Ok((_mapper.Map<IEnumerable<EmployeePostModel>>(workers)));
//        //}
//        // GET api/<WorkerController>/5
//        [HttpGet("{id}")]
//        public async Task<ActionResult>Get(int id)
//        {
//           var worker =await _workerService.GetByIdAsync(id);
//            if (worker is null)
//                return NotFound();
//            return Ok(_mapper.Map<EmployeePostModel>(worker));
//        }
//        // POST api/<WorkerController>
//        [HttpPost]
//        public async Task<ActionResult> Post([FromBody] EmployeePostModel worker)
//        {
//            var w = await _workerService.AddAsync(_mapper.Map<Employee>(worker));
//            return Ok(_mapper.Map<EmployeePostModel>(w));
//        }

//        //PUT api/<WorkerController>/5
//        [HttpPut("{id}")]
//        public async Task<ActionResult> Put(int id, [FromBody] EmployeePostModel worker)
//        {
//            var w = await _workerService.UpdateAsync(id,_mapper.Map<Employee>(worker));
//            return Ok(_mapper.Map<EmployeeDto>(w));
//        }
//        //DELETE api/<WorkerController>/5
//        [HttpDelete("{id}")]
//        public async Task<ActionResult> Delete(int id)
//        {
//            var worker=await _workerService.GetByIdAsync(id);
//            if(worker is null)
//                return NotFound();
//            await _workerService.DeleteAsync(id);
//            return Ok();
//        }



//        [HttpGet("{id}/positions/{pId}")]
//        public async Task<ActionResult> Get(int id,int pId)
//        {
//          var ep=await _positionEmployeeService.GetEmployeePositionByIdAsync(id,pId);
//            return Ok((_mapper.Map<PositionEmployeePostModel>(ep)));


//        }

//        //[HttpGet]
//        //public async Task<IEnumerable<ActionResult>> Get()
//        //{
//        //    return ep = await _positionEmployeeService.GetEarliestEntryEmployeesAsync();

//        //}
//        [HttpGet("{id}/positions")]
//        public async Task<ActionResult<IEnumerable<PositionEmployeeDto>>> GetPositions(int id)
//        {
//            var employeePositions = await _positionEmployeeService.GetEmployeePositionsAsync(id);


//            var positionDtos = _mapper.Map<IEnumerable<PositionEmployeeDto>>(employeePositions);
//            return Ok(positionDtos);
//        }


//        [HttpPost("{employeeId}/positions")]
//        public async Task<ActionResult> Post(int employeeId, [FromBody] PositionEmployeePostModel ep)
//        {
//            var e = await _positionEmployeeService.AddPositionToEmployeeAsync(employeeId, _mapper.Map<PositionEmployee>(ep));
//            if (e is null)
//                return Ok();
//            return Ok(_mapper.Map<PositionEmployeeDto>(e));
//        }

//        [HttpPut("{employeeId}/positions/{positionId}")]
//        public async Task<ActionResult> Put(int employeeId, int positionId, [FromBody] PositionEmployeePostModel ep)
//        {
//            var e = await _positionEmployeeService.UpdatePositionToEmployeeAsync(employeeId, positionId, _mapper.Map<PositionEmployee>(ep));
//            //if (e is null)
//            //    return NotFound();
//            return Ok(_mapper.Map<PositionEmployeeDto>(e));
//        }

//        [HttpDelete("{employeeId}/positions/{positionId}")]
//        public async Task<ActionResult> Delete(int employeeId, int positionId)
//        {
//            var e = await _positionEmployeeService.DeletePositionOfEmployeeAsync(employeeId, positionId);
//            if (e == false)
//                return NotFound();
//            return Ok();
//        }








//    }
//}
using Servec.Core.Services;
using Server.Core.Entities;
using Server.Core.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Server.Service.Services
{
    public class EmployeeService : IEmployeeService
    {
        private readonly IEmployeeRepository _employeeRepository;

        public EmployeeService(IEmployeeRepository employeeRepository)
        {
            _employeeRepository = employeeRepository;
        }

        public async Task<IEnumerable<Employee>> GetAllAsync()
        {
            return await _employeeRepository.GetAllAsync();
        }

        public async Task<Employee> GetByIdAsync(int employeeId)
        {
            return await _employeeRepository.GetByIdAsync(employeeId);

        }

        public async Task<Employee> UpdateAsync(int id, Employee employee)
        {
            employee.Id = id;
            DateTime allowedStartDate = DateTime.Today.AddYears(-18);

            if (employee.BirthDate >= allowedStartDate)
                throw new ArgumentException("Employee must be at least 18 years old.", nameof(employee));

            if (!employee.Identity.All(char.IsDigit) || employee.Identity.Length != 9)
                throw new ArgumentException("Identity must contain exactly 9 digits.", nameof(employee));

            if (!employee.FirstName.All(char.IsLetter) || !employee.LastName.All(char.IsLetter))
                throw new ArgumentException("First and last name must contain only letters.", nameof(employee));
            return await _employeeRepository.UpdateAsync(employee);
        }

        public async Task DeleteAsync(int id)
        {
            await _employeeRepository.DeleteAsync(id);
        }

        public async Task<Employee> AddAsync(Employee employee)
        {
            DateTime allowedStartDate = DateTime.Today.AddYears(-18);
            if (employee.BirthDate >= allowedStartDate)
                throw new ArgumentException("Employee must be at least 18 years old.", nameof(employee));

            if (!employee.Identity.All(char.IsDigit) || employee.Identity.Length != 9)
                throw new ArgumentException("Identity must contain exactly 9 digits.", nameof(employee));

            if (!employee.FirstName.All(char.IsLetter) || !employee.LastName.All(char.IsLetter))
                throw new ArgumentException("First and last name must contain only letters.", nameof(employee));

            return await _employeeRepository.AddAsync(employee);
        }

    }
}
