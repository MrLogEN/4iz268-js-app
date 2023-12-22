using System;
using System.Collections.Generic;
using System.Security.Policy;
using Microsoft.EntityFrameworkCore;
using stock_evidence.backend.Models;

namespace stock_evidence.backend.Data;

public partial class EvidenceDbContext : DbContext
{
    public EvidenceDbContext(DbContextOptions<EvidenceDbContext> options)
        : base(options)
    {
    }

    public virtual DbSet<Material> Mats { get; set; }

    public virtual DbSet<Stock> Stocks { get; set; }

    public virtual DbSet<Warehouse> Wrhs { get; set; }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Material>(entity =>
        {
            entity.HasKey(e => e.IdMat).HasName("pk_mat");
        });

        modelBuilder.Entity<Stock>(entity =>
        {
            entity.HasKey(e => new { e.IdMat, e.IdWrhs }).HasName("pk_stock");

            entity.HasOne(d => d.IdMatNavigation).WithMany(p => p.Stocks).HasConstraintName("fk_stock_stock_mat");

            entity.HasOne(d => d.IdWrhsNavigation).WithMany(p => p.Stocks).HasConstraintName("fk_stock_stock2_wrhs");
        });

        modelBuilder.Entity<Warehouse>(entity =>
        {
            entity.HasKey(e => e.IdWrhs).HasName("pk_wrhs");
        });

        OnModelCreatingPartial(modelBuilder);
    }

    partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
}
