using System;
using System.Collections.Generic;
using System.Linq;
using Common;
using Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class PropertyController : ControllerBase
    {
        readonly DatabaseContext _context;

        public PropertyController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/Property
        [HttpGet]
        public ActionResult<List<Property>> Get()
        {
            try
            {
                var properties = _context.Properties.ToList();
                return Ok(properties);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        // GET: api/Property/5
        [HttpGet("{id}", Name = "Get")]
        public ActionResult<Property> Get(int id)
        {
            try
            {
                var property = _context.Properties.Find(id);

                if (property == null)
                {
                    return NotFound();
                }

                return Ok(property);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        // POST: api/Property
        [HttpPost]
        public ActionResult Post([FromBody] Property property)
        {
            try
            {
                _context.Add(property);
                _context.SaveChanges();

                return Ok(property);
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        // PUT: api/Property/5
        [HttpPut("{id}")]
        public ActionResult Put(int id, [FromBody] Property property)
        {
            try
            {
                if (id != property.Id)
                {
                    return BadRequest();
                }

                _context.Entry(property).State = EntityState.Modified;
                _context.Update(property);
                _context.SaveChanges();


                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }

        // DELETE: api/ApiWithActions/5
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            try
            {
                var property = _context.Properties.Find(id);

                if (property == null)
                {
                    return NotFound();
                }

                _context.Remove(property);
                _context.SaveChanges();

                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex);
            }
        }
    }
}
