using System;
using System.Collections.Generic;
using IKTProjekt2.Models;
using Microsoft.EntityFrameworkCore;


public partial class IKTProjekt : DbContext
{
    public class MainDbContext : DbContext
    {
        public DbSet<Jobs> Jobs { get; set; }
        public DbSet<Company> Comnpanies { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            // Configure your database connection
            optionsBuilder.UseMySQL("server=localhost;database=iktp2;user=root;password=;");
        }
    }

}
