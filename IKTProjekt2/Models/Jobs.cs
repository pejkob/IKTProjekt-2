using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;

namespace IKTProjekt2.Models
{
    public class Jobs
    {
        public int Id { get; set; } 
        public string ?JobName { get; set; }
        public double salary { get; set; }
        public string ?skill { get; set; }
        public int companyId{ get; set; }
        public Company company { get; set; }    
    }
}
