import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import SessionFormContainer from './session_form/session_form_container';
import { Route } from 'react-router-dom';
import LoginFormContainer from './form/login_form_container';
import SignupFormContainer from './form/signup_form_container';

const App = () => (
  <div>
    <header className="main-nav">
      <h1>FStop</h1>
      <NavbarContainer />

    </header>
  </div>
);

export default App;
