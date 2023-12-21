using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace stock_evidence.backend.Models;

[Table("part")]
[Index("IdPart", Name = "part_pk", IsUnique = true)]
public partial class Part
{
    [Key]
    [Column("id_part")]
    [StringLength(36)]
    public string IdPart { get; set; } = null!;

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

    [InverseProperty("IdPartNavigation")]
    public virtual ICollection<Mat> Mats { get; set; } = new List<Mat>();
}
