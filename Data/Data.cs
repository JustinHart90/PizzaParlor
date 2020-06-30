using System;
using System.Collections.Generic;

namespace PizzaParlor.Data
{
    public static class Data
{
    public static List<Order> Orders => allOrders;
    static List<Order> allOrders = new List<Order>()
    {
        new Order()
        {
            Id=1,
            Name="Vienna, Austria",
            SubTotal=1.99,
            Tax=0.00,
            Total=1.99,
            DateStarted = new DateTime(2017,01,20),
            DateCompleted = null
        },
        new Order()
        {
            Id=2,
            Name="Carpinteria, CA, USA",
            SubTotal=2.99,
            Tax=0.00,
            Total=2.99,
            DateStarted = new DateTime(2019,02,22),
            DateCompleted = new DateTime(2019,01,30)
        },
        new Order()
        {
            Id=3,
            Name="San Francisco, CA, USA",
            SubTotal=3.99,
            Tax=0.00,
            Total=3.99,
            DateStarted = new DateTime(2019,01,27),
            DateCompleted = new DateTime(2019,01,30)
        },
        new Order()
        {
            Id=4,
            Name="Tucson, AZ, USA",
            SubTotal=4.99,
            Tax=0.00,
            Total=4.99,
            DateStarted = new DateTime(2019,01,20),
            DateCompleted = null
        },
        new Order()
        {
            Id=5,
            Name="Albuquerque, NM, USA",
            SubTotal=5.99,
            Tax=0.00,
            Total=5.99,
            DateStarted = new DateTime(2015,01,20),
            DateCompleted = new DateTime(2015,01,30)
        },
        new Order()
        {
            Id=6,
            Name="Munich, Germany",
            SubTotal=6.99,
            Tax=0.00,
            Total=6.99,
            DateStarted = new DateTime(2019,01,20),
            DateCompleted = null
        }
    };
}
}