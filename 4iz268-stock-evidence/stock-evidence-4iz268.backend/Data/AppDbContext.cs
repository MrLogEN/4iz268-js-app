using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using stock_evidence.backend.Models;

namespace stock_evidence.backend.Data;

public partial class AppDbContext : DbContext
{
    public AppDbContext()
    {
    }

    public AppDbContext(DbContextOptions<AppDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Employee> Emps { get; set; }

    public virtual DbSet<Material> Mats { get; set; }

    public virtual DbSet<Partner> Parts { get; set; }

    public virtual DbSet<Stock> Stocks { get; set; }

    public virtual DbSet<Warehouse> Wrhs { get; set; }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        => optionsBuilder.UseNpgsql("Name=ConnectionStrings:apiDb");

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Employee>(entity =>
        {
            entity.HasKey(e => e.IdEmp).HasName("pk_emp");
        });

        modelBuilder.Entity<Material>(entity =>
        {
            entity.HasKey(e => e.IdMat).HasName("pk_mat");

            entity.HasOne(d => d.IdPartNavigation).WithMany(p => p.Mats)
                .OnDelete(DeleteBehavior.Restrict)
                .HasConstraintName("fk_mat_supplies_part");
        });

        modelBuilder.Entity<Partner>(entity =>
        {
            entity.HasKey(e => e.IdPart).HasName("pk_part");
        });

        modelBuilder.Entity<Stock>(entity =>
        {
            entity.HasKey(e => new { e.IdMat, e.IdWrhs }).HasName("pk_stock");

            entity.HasOne(d => d.IdMatNavigation).WithMany(p => p.Stocks)
                .OnDelete(DeleteBehavior.Restrict)
                .HasConstraintName("fk_stock_stock_mat");

            entity.HasOne(d => d.IdWrhsNavigation).WithMany(p => p.Stocks)
                .OnDelete(DeleteBehavior.Restrict)
                .HasConstraintName("fk_stock_stock2_wrhs");
        });

        modelBuilder.Entity<Warehouse>(entity =>
        {
            entity.HasKey(e => e.IdWrhs).HasName("pk_wrhs");

            entity.HasOne(d => d.IdEmpNavigation).WithMany(p => p.Wrhs)
                .OnDelete(DeleteBehavior.Restrict)
                .HasConstraintName("fk_wrhs_incharge_emp");

            entity.HasMany(d => d.IdEmps).WithMany(p => p.IdWrhs)
                .UsingEntity<Dictionary<string, object>>(
                    "Work",
                    r => r.HasOne<Employee>().WithMany()
                        .HasForeignKey("IdEmp")
                        .HasConstraintName("fk_works_works2_emp"),
                    l => l.HasOne<Warehouse>().WithMany()
                        .HasForeignKey("IdWrhs")
                        .HasConstraintName("fk_works_works_wrhs"),
                    j =>
                    {
                        j.HasKey("IdWrhs", "IdEmp").HasName("pk_works");
                        j.ToTable("works");
                        j.HasIndex(new[] { "IdEmp" }, "works2_fk");
                        j.HasIndex(new[] { "IdWrhs" }, "works_fk");
                        j.HasIndex(new[] { "IdWrhs", "IdEmp" }, "works_pk").IsUnique();
                        j.IndexerProperty<string>("IdWrhs")
                            .HasMaxLength(36)
                            .HasColumnName("id_wrhs");
                        j.IndexerProperty<string>("IdEmp")
                            .HasMaxLength(36)
                            .HasColumnName("id_emp");
                    });
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
