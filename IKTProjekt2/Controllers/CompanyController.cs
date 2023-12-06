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
        public ActionResult Post(Company newcompany)
        {
            var context=new MainDbContext();
            try
            {
                context.Companies.Add(newcompany);
                context.SaveChanges();
                return StatusCode(statusCode: 201, "Új cég sikeresen hozzáadva!");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpPut]
        public ActionResult Put(Company editcompany)
        {
            var context= new MainDbContext();
            try
            {
                context.Companies.Update(editcompany);
                context.SaveChanges();
                return StatusCode(statusCode: 204, "Sikeres adatmódosítás");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpDelete("{id}")]
        public ActionResult Delete(int id)
        {
            var context=new MainDbContext();
            try
            {
                Company deleteCompany = new(id);
                context.Companies.Remove(deleteCompany);
                context.SaveChanges();
                return StatusCode(statusCode: 200, "Sikeres adattörlés!");
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }


    }
}
