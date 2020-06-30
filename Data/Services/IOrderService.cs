using System.Collections.Generic;

namespace PizzaParlor.Data
{
    public interface IOrderService
    {
        List<Order> GetAllOrders();
        Order GetOrderById(int orderId);
        void UpdateOrder(int orderId, Order order);
        void DeleteOrder(int orderId);
        void AddOrder(Order order);
    }
}