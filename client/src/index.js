import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/app';
import 'bootstrap/dist/css/bootstrap.min.css';
import registerServiceWorker from './registerServiceWorker';

document.title = process.env.REACT_APP_NAME;
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
