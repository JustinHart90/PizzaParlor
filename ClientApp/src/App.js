import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';

import { Home } from './components/Home';
import { Orders } from './components/Order/Orders';
import { Create } from './components/Order/Create';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/orders' component={Orders} />
        <Route path='/create' component={Create} />
      </Layout>
    );
  }
}
