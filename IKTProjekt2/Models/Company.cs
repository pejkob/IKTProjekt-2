using Microsoft.EntityFrameworkCore;

namespace IKTProjekt2.Models
{
    public class Company
    {
        public int Id { get; set; }
        public string ?Name {  get; set; }
        public string? CEO { get; set; }

    }
}
