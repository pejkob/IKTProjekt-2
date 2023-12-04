using Microsoft.EntityFrameworkCore;

namespace IKTProjekt2.Models
{
    [PrimaryKey("Id")]
    public class Company
    {
   
        public int Id;
        public string ?Name;
        public string ?CEO;
    }
}
