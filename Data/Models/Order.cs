using System;

namespace PizzaParlor.Data
{
    public class Order
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public double? SubTotal { get; set; }
        public double? Tax { get; set; }
        public double? Total { get; set; }
        public DateTime? DateStarted { get; set; }
        public DateTime? DateCompleted { get; set; }
    }
}