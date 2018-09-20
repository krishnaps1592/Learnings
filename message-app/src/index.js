import React from 'react';
import ReactDOM from 'react-dom';

import './app.css';

import App from './app'
import BindingOneWay from './messages/one-way-binding'
import ParentComponent from './messages/event-binding-sample'


ReactDOM.render(<ParentComponent/>, document.getElementById('root'));