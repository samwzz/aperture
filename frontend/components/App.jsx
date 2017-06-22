import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeContainer from './home/home_container';
import NavbarContainer from './navbar/navbar_container';
import UserProfileContainer from './user_profile/user_profile_container';
import UserPhotoContainer from './user_profile/user_photo_container';
import AlbumIndexContainer from './album/album_index_container';
import AlbumShowContainer from './album/album_show_container';
import DiscoverContainer from './discover/discover_container';
import PhotoDetailContainer from './photo/photo_detail_container';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
  <div>
    <header>
      <NavbarContainer />
    </header>
    <section>
      <Route exact path="/" component={ HomeContainer } />
      <ProtectedRoute exact path="/discover" component={ DiscoverContainer } />
      <ProtectedRoute exact path="/photos/:photoId" component={ PhotoDetailContainer } />

      <ProtectedRoute exact path="/users/:userId" component={ UserPhotoContainer } />
      <ProtectedRoute exact path="/users/:userId/albums" component={ AlbumIndexContainer } />
      <ProtectedRoute exact path="/users/:userId/albums/:albumId" component={ AlbumShowContainer } />
    </section>
  </div>
);

export default App;
