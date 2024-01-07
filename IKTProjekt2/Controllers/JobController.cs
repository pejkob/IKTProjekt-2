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

        [HttpGet("{id}")]
        public ActionResult GetById(int id)
        {
            var context=new MainDbContext();
            try
            {
                return StatusCode(statusCode: 200, context.Jobs.FirstOrDefault(f => f.Id == id));
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
        
       [HttpPut("{id}")]
        public ActionResult Put(int id, Jobs editedJob)
        {
        var context = new MainDbContext();
        try
        {
            Jobs existingJob = context.Jobs.Find(id);

            if (existingJob == null)
            {
                return NotFound($"Job with ID {id} not found");
            }

            existingJob.JobName = editedJob.JobName;
            existingJob.skill = editedJob.skill;
            existingJob.salary = editedJob.salary;
            existingJob.companyId = editedJob.companyId;

            context.Update(existingJob);
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
        Jobs deleteJob = context.Jobs.Find(id);

        if (deleteJob == null)
        {
            return NotFound($"Job with ID {id} not found");
        }

        context.Remove(deleteJob);
        context.SaveChanges();

        return StatusCode(statusCode: 200, "Job successfully deleted");
    }
    catch (Exception ex)
    {
        return BadRequest(ex.Message);
    }
}



    }
}
