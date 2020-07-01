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
            Name="Justin",
            SubTotal=1.99,
            Tax=0.00,
            Total=1.99,
            DateStarted = new DateTime(2017,01,20),
            DateCompleted = null
        },
        new Order()
        {
            Id=2,
            Name="Jim",
            SubTotal=2.99,
            Tax=0.00,
            Total=2.99,
            DateStarted = new DateTime(2019,02,22),
            DateCompleted = new DateTime(2019,01,30)
        },
        new Order()
        {
            Id=3,
            Name="John",
            SubTotal=3.99,
            Tax=0.00,
            Total=3.99,
            DateStarted = new DateTime(2019,01,27),
            DateCompleted = new DateTime(2019,01,30)
        },
        new Order()
        {
            Id=4,
            Name="Jason",
            SubTotal=4.99,
            Tax=0.00,
            Total=4.99,
            DateStarted = new DateTime(2019,01,20),
            DateCompleted = null
        },
        new Order()
        {
            Id=5,
            Name="Jules",
            SubTotal=5.99,
            Tax=0.00,
            Total=5.99,
            DateStarted = new DateTime(2015,01,20),
            DateCompleted = new DateTime(2015,01,30)
        },
        new Order()
        {
            Id=6,
            Name="Joben",
            SubTotal=6.99,
            Tax=0.00,
            Total=6.99,
            DateStarted = new DateTime(2019,01,20),
            DateCompleted = null
        }
    };
}
}