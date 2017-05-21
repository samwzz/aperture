import React from 'react';
import HomeContainer from './home/home_container';
import { Route } from 'react-router-dom';
import LoginFormContainer from './session_form/login_form_container';
import SignupFormContainer from './session_form/signup_form_container';
import PhotoIndexContainer from './photo_index/photo_index_container';
import PhotoShowContainer from './photo_show/photo_show_container';

const App = () => (
  <div>
    <header>
      <HomeContainer />
    </header>
    <section>
      <div className="test">

      </div>

      <Route exact path="/discover" component={ PhotoIndexContainer } />
      <Route exact path="/photos/:photoId/" component={ PhotoShowContainer } />
    </section>
  </div>
);

export default App;
