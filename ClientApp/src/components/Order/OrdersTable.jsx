import React from 'react';

function OrdersTable(props) {

    function formatDate(date) {
        return (date ? new Date(date).toLocaleDateString() : '-');
    }

    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Total</th>
                    <th>Date</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.orders.map((order) => (
                        <tr key={order.id}>
                            <td>{order.name}</td>
                            <td>{order.total}</td>
                            <td>{formatDate(order.dateStarted)}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    );
}

export default OrdersTable;