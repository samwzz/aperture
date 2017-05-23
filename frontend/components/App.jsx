import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeContainer from './home/home_container';
import NavbarContainer from './navbar/navbar_container';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import PhotoIndexContainer from './photo_index/photo_index_container';
import PhotoShowContainer from './photo_show/photo_show_container';
import PhotoListContainer from './photo_list/photo_list_container';
import UserProfileContainer from './user_profile/user_profile_container';
import AlbumIndexContainer from './album_index/album_index_container';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <NavbarContainer />
    </header>
    <section>
      <Route exact path="/" component={ HomeContainer } />
      <ProtectedRoute exact={true} path="/discover" component={ PhotoIndexContainer } />

      <ProtectedRoute path="/users/:userId" component={ UserProfileContainer } />
      <ProtectedRoute exact={true} path="/users/:userId" component={ PhotoListContainer } />
      <ProtectedRoute exact={true} path="/users/:userId/albums" component={ AlbumIndexContainer } />
    </section>
  </div>
);

export default App;
