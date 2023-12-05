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
                return Ok(context.Jobs.ToList());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }

        }


    }
}
