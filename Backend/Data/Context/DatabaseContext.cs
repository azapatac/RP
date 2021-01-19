namespace Data
{
    using System.Reflection;
    using Common;
    using Microsoft.EntityFrameworkCore;

    public class DatabaseContext : DbContext
    {
        private const string Path = "Database.db";

        public DbSet<Property> Properties { get; set; }

        public DatabaseContext()
        {            
            Database.EnsureCreated();
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlite($"Filename={Path}", options =>
            {
                options.MigrationsAssembly(Assembly.GetExecutingAssembly().FullName);
            });

            base.OnConfiguring(optionsBuilder);
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Property>().ToTable("Properties", "RealPage");
            modelBuilder.Entity<Property>(entity =>
            {
                entity.Property(e => e.Id).ValueGeneratedOnAdd();
            });

            base.OnModelCreating(modelBuilder);
        }
    }
}