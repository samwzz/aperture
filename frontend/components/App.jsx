import React from 'react';
import { Route } from 'react-router-dom';
import HomeContainer from './home/home_container';
import NavbarContainer from './navbar/navbar_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import PhotoIndexContainer from './photo_index/photo_index_container';
import PhotoShowContainer from './photo_show/photo_show_container';
import PhotoListContainer from './photo_list/photo_list_container';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <NavbarContainer />
    </header>
    <section>
      <Route exact path="/" component={ HomeContainer } />
      <ProtectedRoute exact path="/discover" component={ PhotoIndexContainer } />
      <ProtectedRoute exact path="/photos/:photoId/" component={ PhotoShowContainer } />
      <ProtectedRoute exact path="/users/:userId/" component={ PhotoListContainer } />
    </section>
  </div>
);

export default App;
