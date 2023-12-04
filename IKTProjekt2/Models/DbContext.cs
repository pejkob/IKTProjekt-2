using System;
using System.Collections.Generic;
using IKTProjekt2.Models;
using Microsoft.EntityFrameworkCore;

namespace WebShop_MVC_DbtoM.Models;

public partial class WebshopMvcContext : DbContext
{
    public WebshopMvcContext()
    {
    }

    public WebshopMvcContext(DbContextOptions<WebshopMvcContext> options)
        : base(options)
    {
    }
    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        if (!optionsBuilder.IsConfigured)
        {
            optionsBuilder.UseMySQL("server=localhost; database=iktp2; user=root; password=");
        }
    }


    public virtual DbSet<Jobs> Jobs { get; set; }

    public virtual DbSet<Company> Companies { get; set; }
}
