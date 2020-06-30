import React from 'react';
import OrdersTable from './OrdersTable';
import axios from 'axios';

export class Orders extends React.Component {
    constructor(props) {
        super(props);

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

    render() {

        let content = (
            this.state.loading
            ? <p><em>Loading...</em></p>
            : <OrdersTable orders={this.state.orders} />
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