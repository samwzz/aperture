import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import SessionFormContainer from './session_form/session_form_container';
import { Route } from 'react-router-dom';
import LoginFormContainer from './form/login_form_container';

const App = () => (
  <div>
    <header>
      <h1>FStop</h1>
      <LoginFormContainer />
    </header>
  </div>
);

export default App;
