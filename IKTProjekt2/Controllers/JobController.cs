using IKTProjekt2.Migrations;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using IKTProjekt2.Models;
using static IKTProjekt;
using Microsoft.EntityFrameworkCore;

namespace IKTProjekt2.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class JobController : ControllerBase
    {

        [HttpGet]
        public ActionResult Get()
        {
            var context=new MainDbContext();
            try
            {
                return StatusCode(statusCode:200,context.Jobs.ToList());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }
        [HttpPost]
        public ActionResult Post(Jobs newJob)
        {
            var context= new MainDbContext();
            try
            {
                context.Add(newJob);
                context.SaveChanges();
                return StatusCode(statusCode:201,context.Jobs);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


    }
}
