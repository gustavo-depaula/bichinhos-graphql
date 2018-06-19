import React from 'react';
import ReactDOM from 'react-dom';
import App, {AppRoute} from './app';
import registerServiceWorker from './registerServiceWorker';
import Relay from 'react-relay/classic';
import './app.css'

Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer('https://api.graph.cool/relay/v1/cjiap18mx5e8r0160sb50lanq')
);

ReactDOM.render(
  <Relay.RootContainer
    Component={App}
    route={AppRoute}
  />
  , document.getElementById('root'));
registerServiceWorker();
