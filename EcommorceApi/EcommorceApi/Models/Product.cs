using System;
using System.Collections.Generic;

#nullable disable

namespace EcommorceApi.Models
{
    public partial class Product
    {
        public string ProductId { get; set; }
        public string ProductName { get; set; }
        public string Category { get; set; }
        public int Price { get; set; }
    }
}
