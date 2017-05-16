import React from 'react';
import ReactDOM from 'react-dom';
import * as APIUtil from './actions/session_actions';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  window.signup = APIUtil.signup;
  window.login = APIUtil.login;
  window.logout = APIUtil.logout;
  const store = configureStore();
  window.store = store;
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to FStop</h1>, root);
});
