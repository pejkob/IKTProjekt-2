using IKTProjekt2.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
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
        [HttpGet("{id}")]
        public ActionResult GetById(int id)
        { 
            var context = new MainDbContext();
            try
            {
                return StatusCode(statusCode: 200, context.Companies.FirstOrDefault(f => f.Id == id));
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
               return StatusCode(statusCode:201,context.Companies);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
        [HttpPut("{id}")]
       public ActionResult Put(int id, Company editedCompany)
{
    var context = new MainDbContext();
    try
    {
        Company existingCompany = context.Companies.Find(id);

        if (existingCompany == null)
        {
            return NotFound($"Job with ID {id} not found");
        }

        // Update the properties of the existing job
        existingCompany.Name = editedCompany.Name;
        existingCompany.PhoneNumber = editedCompany.PhoneNumber;
        existingCompany.Email = editedCompany.Email;
        existingCompany.CEO = editedCompany.CEO;

        context.Update(existingCompany);
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
    var context = new MainDbContext();
    try
    {
        Company deleteCompany = context.Companies.Include(c=>c.Jobs).FirstOrDefault(c => c.Id == id);

                if (deleteCompany == null)
        {
            return NotFound($"Company with ID {id} not found");
        }

        // Check if there are related records (e.g., jobs)
        if (deleteCompany.Jobs.Any())
        {
            // There are related records; handle or notify accordingly
            return BadRequest("Cannot delete company with related jobs");
        }

        context.Remove(deleteCompany);
        context.SaveChanges();

        return StatusCode(statusCode: 200, "Company successfully deleted");
    }
    catch (Exception ex)
    {
        return BadRequest(ex.Message);
    }
}


    }
}
