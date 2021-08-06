/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Provider } from 'react-redux';
import './App.css';
import Router from './navigation/routes';
import store from './redux/store/store';
import Toast from './components/Toast/Toast';

function App() {
  return (
    <div className="w-full">
      <Provider store={store}>
        <Toast />
        <Router />
      </Provider>
    </div>
  );
}

export default App;
