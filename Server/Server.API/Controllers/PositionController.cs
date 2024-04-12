using AutoMapper;
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
    public class PositionController : ControllerBase
    {
        private readonly IPositionService _positionService;
        private readonly IMapper _mapper;

        public PositionController(IPositionService positionService, IMapper mapper)
        {
            _positionService = positionService;
            _mapper = mapper;
        }

        // GET: api/<PositionController>
        [HttpGet]
        public async Task<ActionResult> Get()
        {
            var positions = await _positionService.GetAllAsync();
            if (positions is null)
                return NotFound();
            return Ok(_mapper.Map<IEnumerable<PositionDto>>(positions));
        }

        // GET api/<PositionController>/5
        [HttpGet("{id}")]
        public async Task<ActionResult> Get(int id)
        {
            var position = await _positionService.GetByIdAsync(id);
            if (position is null)
                return NotFound();
            return Ok(_mapper.Map<PositionPostModel>(position));
        }

        // POST api/<PositionController>
        [HttpPost]
        public async Task<ActionResult> Post([FromBody] PositionPostModel position)
        {
            if (position is null)
                return BadRequest();
            var r = await _positionService.AddAsync(_mapper.Map<Position>(position));
            return Ok(r);
        }

        // PUT api/<PositionController>/5
        [HttpPut("{id}")]
        public async Task<ActionResult> Put(int id, [FromBody] PositionPostModel position)
        {
            var r = await _positionService.UpdateAsync(_mapper.Map<Position>(position));
            return Ok(_mapper.Map<PositionDto>(r));
        }

        // DELETE api/<PositionController>/5
        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            var position = await _positionService.GetByIdAsync(id);
            if (position is null)
                return NotFound();
            return Ok(_mapper.Map<PositionDto>( _positionService.DeleteAsync(id)));
        }
    }
}
