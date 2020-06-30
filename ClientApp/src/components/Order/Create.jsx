import React from 'react';
import axios from 'axios';

export class Create extends React.Component {
    constructor(props) {
        super(props);

        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeTotal = this.onChangeTotal.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            total: 0.00,
            date: null
        }
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        })
    }
    
    onChangeTotal(e) {
        this.setState({
            total: e.target.value
        })
    }
    
    onChangeDate(e) {
        this.setState({
            date: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const { history } = this.props;

        let orderObject = {
            Id: Math.floor(Math.random() * 1000),
            Name: this.state.name,
            Total: this.state.total,
            DateStarted: this.state.date
        }

        axios.post("api/orders/create", orderObject).then(result => {
            history.push('/orders');
        })
    }

    render() {
        return (
            <div className="trip-form" >
                <h3>Create Order</h3>
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
                        <label>Date:  </label>
                        <input 
                            type="date" 
                            className="form-control" 
                            value={this.state.date}
                            onChange={this.onChangeDate}
                        />
                    </div>
                    
                    
                    <div className="form-group">
                        <input type="submit" value="Add Order" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}