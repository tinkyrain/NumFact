import React from 'react';
import ReactDOM from 'react-dom/client';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './App';

import './index.css';
import './media.css';

const defaultState = {
  text: '',
}

const reducer = (state = defaultState, action) => {
  switch(action.type){
    case 'ADD_TEXT':
      return {...state, text: state.text = action.textChange};
    
    default:
      return state;
  }
}

export const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>
);