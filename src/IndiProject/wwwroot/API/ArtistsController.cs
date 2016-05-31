using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using IndiProject.Data;
using IndiProject.Models;
using Microsoft.EntityFrameworkCore;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace IndiProject.wwwroot.API
{
    [Route("api/[controller]")]
    public class ArtistsController : Controller
    {
        private ApplicationDbContext _db;
        public ArtistsController(ApplicationDbContext db)
            {
            this._db = db;
            }
        // GET: api/values
        [HttpGet]
        public IEnumerable<Artist> Get()
        {
            var artists = _db.Artists.ToList();
            return artists;
        }

        // GET api/values/5
        [HttpGet("{id}")]
        public Artist Get(int id)
        {
            return _db.Artists.Where(a => a.Id == id).First();
        }

        // POST api/values
        [HttpPost]
        public IActionResult Post([FromBody]Artist artist)
        {
           
            _db.Artists.Add(artist);
            _db.SaveChanges();

            return Ok();
        }

        // PUT api/values/5
        [HttpPost("{id}")]
        public IActionResult Put(int id, [FromBody]Artist artist)
        {
            _db.Artists.Update(artist);
            _db.SaveChanges();

            return Ok();
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _db.Artists.Remove(_db.Artists.Where(a => a.Id == id).First());
            _db.SaveChanges();

            return Ok();
        }
    }
}
