import React from 'react';
import { Provider } from 'react-redux';
import store, { persistor } from './store';
import Content from './content';
import { PersistGate } from 'redux-persist/integration/react';

import './App.css';

function App() {
  return (<Provider store={store}>
    <PersistGate persistor={persistor} loading={<div>Loading...</div>}>
      <Content />
    </PersistGate>
  </Provider>);
}

export default App;
