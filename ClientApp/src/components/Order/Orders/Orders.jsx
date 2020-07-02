import React from 'react';
import OrdersTable from './OrdersTable';
import { connect } from 'react-redux';
import { getAllOrders } from '../../../actions/orderActions';

export class Orders extends React.Component {
    constructor(props) {
        super(props);

        this.onOrderUpdate = this.onOrderUpdate.bind(this);
        this.onOrderDelete = this.onOrderDelete.bind(this);
        this.renderOrdersTable = this.renderOrdersTable.bind(this);

        this.state = {
            orders: [],
            loading: true,
            failed: false,
            error: ''
        }
    }

    componentDidMount() {
        this.props.getAllOrders();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.orders.data !== this.props.orders.data) {
            this.setState({ orders: this.props.orders.data });
        }
    }

    onOrderUpdate(id) {
        const {history} = this.props;
        history.push('/orders/' + id);
    }
    
    onOrderDelete(id) {
        const {history} = this.props;
        history.push('/orders/delete/' + id);
    }

    renderOrdersTable() {
        return (
            <OrdersTable
                orders={this.state.orders}
                onOrderUpdate={this.onOrderUpdate}
                onOrderDelete={this.onOrderDelete}
            />
        );
    }

    render() {

        let content = this.props.orders.loading
        ? <p><em>Loading...</em></p>
        : this.state.orders.length && this.renderOrdersTable();

        return (
            <div>
                <h1>All Orders</h1>
                <p>Here you can see all orders.</p>
                {content}
            </div>
        )
    }
}

const mapStateToProps = ({orders}) => ({
    orders
});

export default connect(mapStateToProps, {getAllOrders})(Orders);