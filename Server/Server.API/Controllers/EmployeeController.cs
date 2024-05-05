using AutoMapper;
using EmployeesManagementServer.Core.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Servec.Core.Services;
using Server.API.Models;
using Server.Core.DTOs;
using Server.Core.Entities;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860
namespace Server.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly IPositionEmployeeService _positionEmployeeService;
        private readonly IEmployeeService _workerService;
        private readonly IMapper _mapper;
        // GET: api/<WorkerController>
        public EmployeeController(IEmployeeService workerService,IMapper mapper,IPositionEmployeeService positionEmployeeService)
        {
            _workerService = workerService;
            _mapper = mapper;
            _positionEmployeeService = positionEmployeeService;
        }
        [HttpGet]
        public async Task<ActionResult> Get()
        {
            var workers = await _workerService.GetAllAsync();
            if (workers is null)
                return NotFound();
            return Ok(_mapper.Map<IEnumerable<EmployeeDto>>(workers));
        }
        [HttpGet("{id}")]
        public async Task<ActionResult>Get(int id)
        {
           var worker =await _workerService.GetByIdAsync(id);
            if (worker is null)
                return NotFound();
            return Ok(_mapper.Map<EmployeeDto>(worker));
        }
        // POST api/<WorkerController>
        [HttpPost]
        [Authorize]
        public async Task<ActionResult> Post([FromBody] EmployeePostModel worker)
        {
            var w = await _workerService.AddAsync(_mapper.Map<Employee>(worker));
            return Ok(_mapper.Map<EmployeeDto>(w));
        }

        //PUT api/<WorkerController>/5
        [HttpPut("{id}")]
        [Authorize]
        public async Task<ActionResult> Put(int id, [FromBody] EmployeePostModel worker)
        {
            var w = await _workerService.UpdateAsync(id,_mapper.Map<Employee>(worker));
            if (w is null)
                return NotFound();
            return Ok(_mapper.Map<EmployeeDto>(w));
        }
        //DELETE api/<WorkerController>/5
        
        [HttpDelete("{id}")]
        [Authorize]
        public async Task<ActionResult> Delete(int id)
        {
            var worker=await _workerService.GetByIdAsync(id);
            if(worker is null)
                return NotFound();
            await _workerService.DeleteAsync(id);
            return Ok();
        }



        [HttpGet("{id}/positions/{pId}")]
        public async Task<ActionResult> Get(int id,int pId)
        {
          var ep=await _positionEmployeeService.GetEmployeePositionByIdAsync(id,pId);
            return Ok((_mapper.Map<PositionEmployeePostModel>(ep)));
        
        
        }

        //[HttpGet]
        //public async Task<IEnumerable<ActionResult>> Get()
        //{
        //    return ep = await _positionEmployeeService.GetEarliestEntryEmployeesAsync();

        //}
        [HttpGet("{id}/positions")]
        public async Task<ActionResult<IEnumerable<PositionEmployeeDto>>> GetPositions(int id)
        {
            var employeePositions = await _positionEmployeeService.GetEmployeePositionsAsync(id);


            var positionDtos = _mapper.Map<IEnumerable<PositionEmployeeDto>>(employeePositions);
            return Ok(positionDtos);
        }


        [HttpPost("{employeeId}/positions")]
        public async Task<ActionResult> Post(int employeeId, [FromBody] PositionEmployeePostModel ep)
        {
            var e = await _positionEmployeeService.AddPositionToEmployeeAsync(employeeId, _mapper.Map<PositionEmployee>(ep));
            if (e is null)
                return Ok();
            return Ok(_mapper.Map<PositionEmployeeDto>(e));
        }

        [HttpPut("{employeeId}/positions/{positionId}")]
        [Authorize]
        [Authorize]
        public async Task<ActionResult> Put(int employeeId, int positionId, [FromBody] PositionEmployeePostModel ep)
        {
            var e = await _positionEmployeeService.UpdatePositionToEmployeeAsync(employeeId, positionId, _mapper.Map<PositionEmployee>(ep));
            //if (e is null)
            //    return NotFound();
            return Ok(_mapper.Map<PositionEmployeeDto>(e));
        }

        [HttpDelete("{employeeId}/positions/{positionId}")]
        [Authorize]
        public async Task<ActionResult> Delete(int employeeId, int positionId)
        {
            var e = await _positionEmployeeService.DeletePositionOfEmployeeAsync(employeeId, positionId);
            if (e == false)
                return NotFound();
            return Ok();
        }








    }
}
