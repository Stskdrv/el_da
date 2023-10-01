import ReactDOM from 'react-dom';
import React from 'react';
import App from './components/App';
require('application.css')

window.subscribeForEntries((_, data) => { 
  renderApp(data.entries);
});


const renderApp = (entries = []) => {
  ReactDOM.render(<App entries={entries} />, document.getElementById('root'));
}
