namespace Common
{
    using System.ComponentModel.DataAnnotations;

    public class Property
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(128)]
        public string Name { get; set; }

        [Required]
        public string Location { get; set; }

        [Required]
        public string Owner { get; set; }

        [Required]
        public double Price { get; set; }
    }
}