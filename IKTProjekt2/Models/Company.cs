using Microsoft.EntityFrameworkCore;

namespace IKTProjekt2.Models
{
    public class Company
    {
        public Company(int id)
        {
            Id = id;
        }

        public int Id { get; set; }
        public string ?Name {  get; set; }
        public string? PhoneNumber { get; set; }
        public string? Email { get; set; }
        public string? CEO { get; set; }
        public ICollection<Jobs> Jobs { get; set; } = new List<Jobs>();
    }
}
