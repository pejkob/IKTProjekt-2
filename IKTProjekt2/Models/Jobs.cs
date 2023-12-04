using Microsoft.EntityFrameworkCore;
using System.ComponentModel.DataAnnotations.Schema;

namespace IKTProjekt2.Models
{
    [PrimaryKey("Id")]
    public class Jobs
    {
        public int Id;
        public string ?JobName;
        public double salary;
        public string ?skill;
        [ForeignKey("Company")]
        public ICollection<Company> ?Companies;
    }
}
