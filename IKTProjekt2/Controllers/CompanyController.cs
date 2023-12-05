using IKTProjekt2.Models;
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
        [HttpPost]
        public ActionResult Post(Company company)
        {
            var context=new MainDbContext();
            try
            {
                context.Companies.Add(company);
                context.SaveChanges();
                return StatusCode(statusCode: 201, "Új cég sikeresen hozzáadva!");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


    }
}
