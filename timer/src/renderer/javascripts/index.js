import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/App';
require('application.css')

window.onload = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
}