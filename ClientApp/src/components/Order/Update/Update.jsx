import React from 'react';
import axios from 'axios';
import Notification from '../../Notify/Toast';
import './Update.css'

export class Update extends React.Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeTotal = this.onChangeTotal.bind(this);
        this.onUpdateCancel = this.onUpdateCancel.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            total: 0.00,
            notify: false
        }
    }

    componentDidMount() {
        const {id} = this.props.match.params;

        axios.get("api/orders/" + id).then(order => {
            const response = order.data;

            this.setState({
                name: response.name,
                total: response.total
            });
        })
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        });
    }
    
    onChangeTotal(e) {
        this.setState({
            total: e.target.value
        });
    }

    onUpdateCancel() {
        const {history} = this.props;
        history.push('/orders');
    }

    onSubmit(e) {
        e.preventDefault();
        const {history} = this.props;
        const {id} = this.props.match.params;

        let orderObject = {
            name: this.state.name,
            total: this.state.total,
            dateStarted: new Date()
        }

        this.setState({ notify: true });
        
        axios.put("api/orders/" + id, orderObject).then(result => {
            history.push('/orders');
        })
    }

    render() {
        return (
            <>
            <Notification 
                show={this.state.notify}
                header="Success"
                body="Order updated!"
            />
            <div className="trip-form" >
                <h3>Update Order</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name:  </label>
                        <input 
                          type="text" 
                          className="form-control" 
                          value={this.state.name}
                          onChange={this.onChangeName}
                         />
                    </div>
                    <div className="form-group">
                        <label>Total: </label>
                        <input
                          type="number"
                          className="form-control"
                          value={this.state.total}
                          onChange={this.onChangeTotal}
                        />
                    </div>
                    
                    <div className="form-group">
                        <button onClick={this.onUpdateCancel} className="btn btn-danger">Cancel</button>
                        <button type="submit" className="btn btn-success">Update</button>
                    </div>
                </form>
            </div>
            </>
        )
    }
}