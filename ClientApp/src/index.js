import 'bootstrap/dist/css/bootstrap.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './App';

import config from './auth_config.json';
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from 'react-redux';
import configureStore from './store/store';


const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

const onRedirectCallback = appState => {
  window.history.replaceState(
    {},
    document.title,
    appState && appState.targetUrl ? appState.targetUrl : window.location.pathname
  );
}

const store = configureStore({});

ReactDOM.render(
  <Auth0Provider
    domain={config.domain}
    clientId={config.clientId}
    redirectUri={window.location.origin}
    onRedirectCallback={onRedirectCallback}>
    <Provider store={store}>
      <BrowserRouter basename={baseUrl}>
          <App />
      </BrowserRouter>
    </Provider>
  </Auth0Provider>,
  rootElement);

registerServiceWorker();