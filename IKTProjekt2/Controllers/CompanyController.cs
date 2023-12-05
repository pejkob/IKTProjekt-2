using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using static IKTProjekt;

namespace IKTProjekt2.Controllers
{
    [Route("[controller]")]
    [ApiController]
    public class CompanyController : ControllerBase
    {
        [HttpGet]
        public ActionResult Get()
        {
            var context = new MainDbContext();
            try
            {
                return StatusCode(statusCode: 200, context.Companies.ToList());
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


    }
}
