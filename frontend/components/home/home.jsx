import React from 'react';
import Modal from 'react-modal';
import { Link, withRouter } from 'react-router-dom';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import FormModalStyle from '../modal/form_modal_style';
import PhotoListContainer from '../photo_list/photo_list_container';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.landing = this.landing.bind(this);
  }

  scrollingBG() {
    return(
      <div className="overlay"></div>
    );
  }

  landing() {
    if (!this.props.loggedIn) {
      return(
        <section className="landing-container">
          <div className="landing">

            <h1 className="landing-header">
              Discover the world through photography
            </h1>
            <h2 className="landing-text">
              Join the Aperture community, share your story, and stay inspired.
            </h2>
            <button className="get-started" onClick={this.openSignupModal}>Get started</button>
            <Modal
              isOpen={this.state.SignupModalOpen}
              onAfterOpen={this.afterModalOpen}
              onRequestClose={this.clearErrorsAndCloseSignup}
              style={FormModalStyle}
              contentLabel="SignupModal"
              className="form-modal"
              >
              <SignupFormContainer closeSignupModal={this.closeSignupModal} openLoginModal={this.openLoginModal} />
            </Modal>
          </div>
        </section>
      );
    }
  }

  allPhotos() {
    if (this.props.loggedIn && this.props.location.pathname === "/") {

      return(
        <section className="all-photos-container">
          <div className="all-photos">
            <PhotoListContainer />
          </div>
        </section>
      );
    }
  }

  render() {
    const { currentUser, logout, loggedIn } = this.props;

    return (
    <section className="home">
        {this.landing()}
        {this.allPhotos()}
      </section>
    );
  }
}

export default withRouter(Home);
