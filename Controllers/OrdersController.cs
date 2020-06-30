using Microsoft.AspNetCore.Mvc;
using PizzaParlor.Data;

namespace PizzaParlor.Controllers
{
    [Route("api/[controller]")]
    public class OrdersController: Controller
    {
        private IOrderService _service;
        public OrdersController(IOrderService service)
        {
            this._service = service;
        }

        [HttpGet()]
        public IActionResult GetOrders()
        {
            var allOrders = _service.GetAllOrders();
            return Ok(allOrders);
        }
        
        [HttpGet("{id}")]
        public IActionResult GetOrderById(int id)
        {
            var order = _service.GetOrderById(id);
            return Ok(order);
        }
        
        [HttpPost()]
        public IActionResult AddOrder([FromBody]Order order)
        {
            if (order != null)
            {
                _service.AddOrder(order);
            }
            return Ok();
        }
        
        [HttpPut("{id}")]
        public IActionResult UpdateOrder(int id, [FromBody]Order order)
        {
            _service.UpdateOrder(id, order);
            return Ok();
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteOrder(int id)
        {
            _service.DeleteOrder(id);
            return Ok();
        }
    }
}