using System;
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
            try {
                var allOrders = _service.GetAllOrders();
                return Ok(allOrders);
            } catch(Exception ex) {
                return BadRequest(ex.Message);
            }
        }


        [HttpGet("{id}")]
        public IActionResult GetOrderById(int id)
        {
            try {
                var order = _service.GetOrderById(id);
                return Ok(order);
            } catch(Exception ex) {
                return BadRequest(ex.Message);
            }
        }


        [HttpPost("create")]
        public IActionResult AddOrder([FromBody]Order order)
        {
            try {
                _service.AddOrder(order);
                return Ok();
            } catch(Exception ex) {
                return BadRequest(ex.Message);
            }
        }


        [HttpPut("{id}")]
        public IActionResult UpdateOrder(int id, [FromBody]Order order)
        {
            try {
                _service.UpdateOrder(id, order);
                return Ok();
            } catch(Exception ex) {
                return BadRequest(ex.Message);
            }
        }


        [HttpDelete("{id}")]
        public IActionResult DeleteOrder(int id)
        {
            try {
                _service.DeleteOrder(id);
                return Ok();
            } catch(Exception ex) {
                return BadRequest(ex.Message);
            }
        }
    }
}