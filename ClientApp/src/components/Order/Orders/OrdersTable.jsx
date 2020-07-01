import React from 'react';

export default class OrdersTable extends React.Component {
    constructor(props) {
        super(props);

        this.formatDate = this.formatDate.bind(this);
    }
    
    formatDate(date) {
        return (date ? new Date(date).toLocaleDateString() : '-');
    }

    render() {
        return (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Total</th>
                        <th>Date</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.orders.map((order) => (
                            <tr key={order.id}>
                                <td>{order.name}</td>
                                <td>{order.total}</td>
                                <td>{this.formatDate(order.dateStarted)}</td>
                                <td>
                                    <div className="form-group">
                                        <button onClick={() => this.props.onOrderUpdate(order.id)} className="btn btn-success">Update</button>
                                    </div>
                                </td>
                                <td>
                                    <div className="form-group">
                                        <button onClick={() => this.props.onOrderDelete(order.id)} className="btn btn-danger">Delete</button>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        );
    }
}