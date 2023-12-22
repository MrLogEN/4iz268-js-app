using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace stock_evidence.backend.Models;

[Table("wrhs")]
[Index("IdWrhs", Name = "wrhs_pk", IsUnique = true)]
public partial class Wrh
{
    [Key]
    [Column("id_wrhs")]
    [StringLength(36)]
    public string IdWrhs { get; set; } = null!;

    [Column("name_wrhs")]
    [StringLength(50)]
    public string NameWrhs { get; set; } = null!;

    [Column("tel_wrhs")]
    [StringLength(16)]
    public string TelWrhs { get; set; } = null!;

    [Column("strt2_wrhs")]
    [StringLength(250)]
    public string? Strt2Wrhs { get; set; }

    [Column("strt_wrhs")]
    [StringLength(250)]
    public string StrtWrhs { get; set; } = null!;

    [Column("strt3_wrhs")]
    [StringLength(250)]
    public string? Strt3Wrhs { get; set; }

    [Column("city_wrhs")]
    [StringLength(250)]
    public string CityWrhs { get; set; } = null!;

    [Column("post_wrhs")]
    [StringLength(20)]
    public string PostWrhs { get; set; } = null!;

    [Column("state_wrhs")]
    [StringLength(50)]
    public string StateWrhs { get; set; } = null!;

    [InverseProperty("IdWrhsNavigation")]
    public virtual ICollection<Stock> Stocks { get; set; } = new List<Stock>();
}
