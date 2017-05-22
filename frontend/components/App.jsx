import React from 'react';
import HomeContainer from './home/home_container';
import { Route } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import PhotoIndexContainer from './photo_index/photo_index_container';
import PhotoShowContainer from './photo_show/photo_show_container';
import UserPhotoIndexContainer from './user_photo/user_photo_index_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <HomeContainer />
    </header>
    <section>
      <ProtectedRoute exact path="/discover" component={ PhotoIndexContainer } />
      <ProtectedRoute exact path="/photos/:photoId/" component={ PhotoShowContainer } />
      <ProtectedRoute exact path="/users/:userId/" component={ UserPhotoIndexContainer } />
    </section>
  </div>
);

export default App;
