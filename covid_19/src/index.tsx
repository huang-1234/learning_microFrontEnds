/* 

import './set-public-path';
import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import * as serviceWorker from './serviceWorker';
import App from './App';
import './index.css';

if (!(window as any).singleSpaNavigate) {
  ReactDOM.render(<App />, document.getElementById('covid'));
}

const domElementGetter = () => {
  return document.getElementById('covid')!;
};

// =========== single-spa模式 ===========
const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  domElementGetter,
  rootComponent: () => <App />,
});

export const { bootstrap, mount, unmount } = reactLifecycles;

serviceWorker.unregister();

 */

import React from "react";
import ReactDOM from "react-dom";
import singleSpaReact from "single-spa-react";
import Root from "./root.component";

const lifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Root,
  errorBoundary(err, info, props) {
    // Customize the root error boundary for your microfrontend here.
    return null;
  },
  domElementGetter: () => {
    return (
      document.getElementById('covid')
    )
  }
});

export const { bootstrap, mount, unmount } = lifecycles;
