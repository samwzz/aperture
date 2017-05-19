import React from 'react';
import NavbarContainer from './navbar/navbar_container';
import SessionFormContainer from './session_form/session_form_container';
import { Route } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import PhotoIndexContainer from './photo_index/photo_index_container';
import PhotoShowContainer from './photo_show/photo_show_container';

const App = () => (
  <div>
    <header>
      <NavbarContainer />
    </header>
    <section>
      <div className=""></div>
      <Route exact path="/" component={ PhotoIndexContainer } />
      <Route exact path="/photos/:photoId/" component={ PhotoShowContainer } />
    </section>
  </div>
);

export default App;
