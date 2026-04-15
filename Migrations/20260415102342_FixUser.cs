using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace StepItUp.Migrations
{
    /// <inheritdoc />
    public partial class FixUser : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Steps_Users_UserId",
                table: "Steps");

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "Steps",
                type: "INTEGER",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "INTEGER");

            migrationBuilder.AddForeignKey(
                name: "FK_Steps_Users_UserId",
                table: "Steps",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Steps_Users_UserId",
                table: "Steps");

            migrationBuilder.AlterColumn<int>(
                name: "UserId",
                table: "Steps",
                type: "INTEGER",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "INTEGER",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Steps_Users_UserId",
                table: "Steps",
                column: "UserId",
                principalTable: "Users",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
