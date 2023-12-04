﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

#nullable disable

namespace IKTProjekt2.Migrations
{
    [DbContext(typeof(IKTProjekt.MainDbContext))]
    [Migration("20231204170907_Initialize")]
    partial class Initialize
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.14")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("IKTProjekt2.Models.Company", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("CEO")
                        .HasColumnType("longtext");

                    b.Property<string>("Name")
                        .HasColumnType("longtext");

                    b.HasKey("Id");

                    b.ToTable("Comnpanies");
                });

            modelBuilder.Entity("IKTProjekt2.Models.Jobs", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    b.Property<string>("JobName")
                        .HasColumnType("longtext");

                    b.Property<int>("companyId")
                        .HasColumnType("int");

                    b.Property<double>("salary")
                        .HasColumnType("double");

                    b.Property<string>("skill")
                        .HasColumnType("longtext");

                    b.HasKey("Id");

                    b.HasIndex("companyId");

                    b.ToTable("Jobs");
                });

            modelBuilder.Entity("IKTProjekt2.Models.Jobs", b =>
                {
                    b.HasOne("IKTProjekt2.Models.Company", "company")
                        .WithMany("jobs")
                        .HasForeignKey("companyId")
                        .OnDelete(DeleteBehavior.Cascade)
                        .IsRequired();

                    b.Navigation("company");
                });

            modelBuilder.Entity("IKTProjekt2.Models.Company", b =>
                {
                    b.Navigation("jobs");
                });
#pragma warning restore 612, 618
        }
    }
}
