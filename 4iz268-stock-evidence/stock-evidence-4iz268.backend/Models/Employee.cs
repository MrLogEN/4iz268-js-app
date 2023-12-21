using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Microsoft.EntityFrameworkCore;

namespace stock_evidence.backend.Models;

[Table("emp")]
[Index("IdEmp", Name = "emp_pk", IsUnique = true)]
public partial class Employee
{
    [Key]
    [Column("id_emp")]
    [StringLength(36)]
    public string IdEmp { get; set; } = null!;

    [Column("names_emp")]
    [StringLength(100)]
    public string NamesEmp { get; set; } = null!;

    [Column("surn_emp")]
    [StringLength(100)]
    public string SurnEmp { get; set; } = null!;

    [Column("since_emp")]
    public DateOnly SinceEmp { get; set; }

    [Column("wage_emp", TypeName = "money")]
    public decimal WageEmp { get; set; }

    [InverseProperty("IdEmpNavigation")]
    public virtual ICollection<Warehouse> Wrhs { get; set; } = new List<Warehouse>();

    [ForeignKey("IdEmp")]
    [InverseProperty("IdEmps")]
    public virtual ICollection<Warehouse> IdWrhs { get; set; } = new List<Warehouse>();
}
