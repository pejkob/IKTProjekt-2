using Microsoft.EntityFrameworkCore.Migrations;
using MySql.EntityFrameworkCore.Metadata;

#nullable disable

namespace IKTProjekt2.Migrations
{
    /// <inheritdoc />
    public partial class Initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterDatabase()
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Companies",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("Sqlite:Autoincrement",true),
                    Name= table.Column<string>(type:"varchar(40)",nullable: false),
                    CEO= table.Column<string>(type:"varchar(40)",nullable: false)

                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Companies", x => x.Id);

                })
                .Annotation("MySQL:Charset", "utf8mb4");

            migrationBuilder.CreateTable(
                name: "Jobs",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                  .Annotation("Sqlite:Autoincrement", true),
                    JobName= table.Column<string>(type:"varchar(30)"),
                    salary=table.Column<double>(type:"double"),
                    skill=table.Column<string>(type:"varchar(30)")


                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Jobs", x => x.Id);
                })
                .Annotation("MySQL:Charset", "utf8mb4");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Companies");

            migrationBuilder.DropTable(
                name: "Jobs");
        }
    }
}
