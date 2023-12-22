using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace stock_evidence.backend.Models;

[Table("mat")]
[Index("IdMat", Name = "mat_pk", IsUnique = true)]
public partial class Material
{
    [Key]
    [Column("id_mat")]
    [StringLength(36)]
    public string IdMat { get; set; } = null!;

    [Column("name_mat")]
    [StringLength(100)]
    public string NameMat { get; set; } = null!;

    [Column("desc_mat")]
    [StringLength(250)]
    public string DescMat { get; set; } = null!;

    [Column("unit_mat")]
    [StringLength(6)]
    public string UnitMat { get; set; } = null!;
    
    [InverseProperty("IdMatNavigation")]
    public virtual ICollection<Stock> Stocks { get; set; } = new List<Stock>();
}
