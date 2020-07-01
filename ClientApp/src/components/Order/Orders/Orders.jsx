import React from 'react';
import OrdersTable from './OrdersTable';
import axios from 'axios';

export class Orders extends React.Component {
    constructor(props) {
        super(props);

        this.onOrderUpdate = this.onOrderUpdate.bind(this);
        this.onOrderDelete = this.onOrderDelete.bind(this);

        this.state = {
            orders: [],
            loading: true
        }
    }

    componentDidMount() {
        this.populateTripsData();
    }

    populateTripsData() {
        axios.get("api/orders").then(result => {
            const response = result.data;
            this.setState({ orders: response, loading: false });
        })
    }

    onOrderUpdate(id) {
        const {history} = this.props;
        history.push('/orders/' + id);
    }
    
    onOrderDelete(id) {
        const {history} = this.props;
        history.push('/orders/delete/' + id);
    }

    render() {

        let content = (
            this.state.loading
            ? <p><em>Loading...</em></p>
            : <OrdersTable
                orders={this.state.orders}
                onOrderUpdate={this.onOrderUpdate}
                onOrderDelete={this.onOrderDelete}
              />
        );

        return (
            <div>
                <h1>All Orders</h1>
                <p>Here you can see all orders.</p>
                {content}
            </div>
        )
    }
}