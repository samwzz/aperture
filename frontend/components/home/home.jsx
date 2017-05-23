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
    this.state = {
      LoginModalOpen: false,
      SignupModalOpen: false
    };
    // Login Modal
    this.openLoginModal = this.openLoginModal.bind(this);
    this.closeLoginModal = this.closeLoginModal.bind(this);
    this.clearErrorsAndCloseLogin = this.clearErrorsAndCloseLogin.bind(this);

    // Signup Modal
    this.openSignupModal = this.openSignupModal.bind(this);
    this.closeSignupModal = this.closeSignupModal.bind(this);
    this.clearErrorsAndCloseSignup = this.clearErrorsAndCloseSignup.bind(this);

    this.afterModalOpen = this.afterModalOpen.bind(this);
    this.landing = this.landing.bind(this);
  }

  openLoginModal() {
    this.setState({
      LoginModalOpen: true,
      SignupModalOpen: false
    });
  }

  clearErrorsAndCloseLogin() {
    this.props.receiveErrors([]);
    this.closeLoginModal();
  }

  closeLoginModal() {
    this.setState({ LoginModalOpen: false });
    FormModalStyle.content.opacity = 0;
  }

  openSignupModal() {
    this.setState({
      SignupModalOpen: true,
      LoginModalOpen: false
     });
  }

  clearErrorsAndCloseSignup() {
    this.props.receiveErrors([]);
    this.closeSignupModal();
  }

  closeSignupModal() {
    this.setState({ SignupModalOpen: false });
    FormModalStyle.content.opacity = 0;
  }

  afterModalOpen() {
    FormModalStyle.content.opacity = 100;
  }

  loginFormModal() {
    return(
      <Modal
        isOpen={this.state.LoginModalOpen}
        onAfterOpen={this.afterModalOpen}
        onRequestClose={this.clearErrorsAndCloseLogin}
        style={FormModalStyle}
        contentLabel="LoginModal"
        className="form-modal"
        >
        <LoginFormContainer closeLoginModal={this.closeLoginModal} openSignupModal={this.openSignupModal} />
      </Modal>
    );
  }

  signupFormModal() {
    return(
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
    );
  }

  scrollingBG() {
    if (!this.props.loggedIn) {
      return(
        <div className="overlay"></div>
      );
    }
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
    if (this.props.loggedIn && this.props.match.path === "/") {

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
        {this.loginFormModal()}
        {this.signupFormModal()}
        {this.landing()}
        {this.allPhotos()}
        {this.scrollingBG()}
      </section>
    );
  }
}

export default withRouter(Home);
