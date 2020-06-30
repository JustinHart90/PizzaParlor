using System.Collections.Generic;
using System.Linq;

namespace PizzaParlor.Data
{
    public class OrderService : IOrderService
    {
        public void AddOrder(Order order) => Data.Orders.Add(order);

        public List<Order> GetAllOrders() => Data.Orders.ToList();

        public Order GetOrderById(int orderId) => Data.Orders.FirstOrDefault(o => o.Id == orderId);

        public void UpdateOrder(int orderId, Order order)
        {
            var oldOrder = Data.Orders.FirstOrDefault(o => o.Id == orderId);

            if (oldOrder != null)
            {
                oldOrder.Name = order.Name;
                oldOrder.SubTotal = order.SubTotal;
                oldOrder.Tax = order.Tax;
                oldOrder.Total = order.Total;
                oldOrder.DateStarted = order.DateStarted;
                oldOrder.DateCompleted = order.DateCompleted;
            }
        }
        public void DeleteOrder(int orderId)
        {
            var order = Data.Orders.FirstOrDefault(o => o.Id == orderId);

            if (order != null)
            {
                Data.Orders.Remove(order);
            }
        }
    }
}