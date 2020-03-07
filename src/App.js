import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Content from './content';

import './App.css';

function App() {
  return (<Provider store={store}>
    <Content />
  </Provider>);
}

export default App;
