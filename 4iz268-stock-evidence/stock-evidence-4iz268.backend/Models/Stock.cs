using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace stock_evidence.backend.Models;

[PrimaryKey("IdMat", "IdWrhs")]
[Table("stock")]
[Index("IdWrhs", Name = "stock2_fk")]
[Index("IdMat", Name = "stock_fk")]
[Index("IdMat", "IdWrhs", Name = "stock_pk", IsUnique = true)]
public partial class Stock
{
    [Key]
    [Column("id_mat")]
    [StringLength(36)]
    public string IdMat { get; set; } = null!;

    [Key]
    [Column("id_wrhs")]
    [StringLength(36)]
    public string IdWrhs { get; set; } = null!;

    [Column("quant_stock")]
    public double QuantStock { get; set; }

    [ForeignKey("IdMat")]
    [InverseProperty("Stocks")]
    public virtual Mat IdMatNavigation { get; set; } = null!;

    [ForeignKey("IdWrhs")]
    [InverseProperty("Stocks")]
    public virtual Wrh IdWrhsNavigation { get; set; } = null!;
}
