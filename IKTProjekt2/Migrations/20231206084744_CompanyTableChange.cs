using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace IKTProjekt2.Migrations
{
    /// <inheritdoc />
    public partial class CompanyTableChange : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Email",
                table: "Companies",
                type: "longtext",
                nullable: true);

            migrationBuilder.AddColumn<string>(
                name: "PhoneNumber",
                table: "Companies",
                type: "longtext",
                nullable: true);

        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropPrimaryKey(
                name: "PK_Companies",
                table: "Companies");

            migrationBuilder.DropColumn(
                name: "Email",
                table: "Companies");

            migrationBuilder.DropColumn(
                name: "PhoneNumber",
                table: "Companies");

            migrationBuilder.RenameTable(
                name: "Companies",
                newName: "Comnpanies");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Comnpanies",
                table: "Comnpanies",
                column: "Id");

            migrationBuilder.CreateIndex(
                name: "IX_Jobs_companyId",
                table: "Jobs",
                column: "companyId");

            migrationBuilder.AddForeignKey(
                name: "FK_Jobs_Comnpanies_companyId",
                table: "Jobs",
                column: "companyId",
                principalTable: "Comnpanies",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
