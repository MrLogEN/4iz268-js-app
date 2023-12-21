using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace stock_evidence.backend.Models;

[Table("wrhs")]
[Index("IdEmp", Name = "incharge_fk")]
[Index("IdWrhs", Name = "wrhs_pk", IsUnique = true)]
public partial class Warehouse
{
    [Key]
    [Column("id_wrhs")]
    [StringLength(36)]
    public string IdWrhs { get; set; } = null!;

    [Column("id_emp")]
    [StringLength(36)]
    public string IdEmp { get; set; } = null!;

    [Column("name_part")]
    [StringLength(50)]
    public string NamePart { get; set; } = null!;

    [Column("tel_part")]
    [StringLength(16)]
    public string TelPart { get; set; } = null!;

    [Column("strt2_part")]
    [StringLength(250)]
    public string? Strt2Part { get; set; }

    [Column("strt_part")]
    [StringLength(250)]
    public string StrtPart { get; set; } = null!;

    [Column("strt3_part")]
    [StringLength(250)]
    public string? Strt3Part { get; set; }

    [Column("city_part")]
    [StringLength(250)]
    public string CityPart { get; set; } = null!;

    [Column("post_part")]
    [StringLength(20)]
    public string PostPart { get; set; } = null!;

    [Column("state_part")]
    [StringLength(50)]
    public string StatePart { get; set; } = null!;

    [ForeignKey("IdEmp")]
    [InverseProperty("Wrhs")]
    public virtual Employee IdEmpNavigation { get; set; } = null!;

    [InverseProperty("IdWrhsNavigation")]
    public virtual ICollection<Stock> Stocks { get; set; } = new List<Stock>();

    [ForeignKey("IdWrhs")]
    [InverseProperty("IdWrhs")]
    public virtual ICollection<Employee> IdEmps { get; set; } = new List<Employee>();
}
