using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using EcommorceApi.Models;

namespace EcommorceApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        EcommorceDbContext ec;
        public UserController(EcommorceDbContext _ec)
        {
            ec = _ec;
        }
        [HttpGet]
        public IEnumerable<User> Get()
        {
            return ec.Users;
        }
        [HttpPost]
        public string Post([FromBody]User user)
        {
            ec.Users.Add(user);
            ec.SaveChanges();
            return "success";
        }
    }
}
