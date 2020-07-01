import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';

import { Home } from './components/Home';
import { Orders } from './components/Order/Orders/Orders';
import { Create } from './components/Order/Create/Create';
import { Update } from './components/Order/Update/Update';
import { Delete } from './components/Order/Delete/Delete';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route exact path='/orders' component={Orders} />
        <Route exact path='/create' component={Create} />
        <Route exact path='/orders/delete/:id' component={Delete} />
        <Route exact path='/orders/:id' component={Update} />
      </Layout>
    );
  }
}
