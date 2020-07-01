import React from 'react';
import axios from 'axios';
import './Delete.css';

export class Delete extends React.Component {
    constructor(props) {
        super(props);

        this.onCancel = this.onCancel.bind(this);
        this.onConfirm = this.onConfirm.bind(this);

        this.state = {
            name: '',
            total: 0.00
        }
    }

    componentDidMount() {
        const {id} = this.props.match.params;

        axios.get("api/orders/" + id).then(order => {
            const response = order.data;

            this.setState({
                name: response.name,
                total: response.total
            })
        })
    }

    onCancel(e) {
        const {history} = this.props;
        history.push('/orders');
    }
    
    onConfirm(e) {
        const {id} = this.props.match.params;
        const {history} = this.props;

        axios.delete("api/orders/" + id).then(result => {
            history.push('/orders');
        });
    }

    render() {
        return (
            <div>
                <h2>Delete Order Confirmation</h2>
                <div className="card">
                    <div className="card-body">
                        <h4 className="card-title">{this.state.name}</h4>
                        <p className="card-text">{this.state.total}</p>

                        <button onClick={this.onCancel} className="btn btn-danger">Cancel</button>
                        <button onClick={this.onConfirm} className="btn btn-success">Confirm Delete</button>
                    </div>
                </div>
            </div>
        )
    }
}