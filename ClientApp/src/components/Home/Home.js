import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div>
        <h1>Welcome to PizzaParlor!</h1>
        <ul>
          <li>Start new order</li>
          <li>Update order</li>
          <li>Show all orders</li>
        </ul>
      </div>
    );
  }
}
