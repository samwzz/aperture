import React from 'react';
import Modal from 'react-modal';
import { Link, withRouter } from 'react-router-dom';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import FormModalStyle from '../modal/form_modal_style';
import UserPhotoIndexContainer from '../user_photo/user_photo_index_container';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      LoginModalOpen: false,
      SignupModalOpen: false
    };
    this.openLoginModal = this.openLoginModal.bind(this);
    this.closeLoginModal = this.closeLoginModal.bind(this);
    this.clearErrorsAndCloseLogin = this.clearErrorsAndCloseLogin.bind(this);

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

  sessionLinks() {
    if (!this.props.loggedIn) {
      return (
        <nav className="login-signup">
          <ul>
            <li>
              <a id="login" onClick={this.openLoginModal}>Log in</a>
            </li>
            <li>
              <a id="signup" onClick={this.openSignupModal}>Sign Up</a>
            </li>
          </ul>
        </nav>
      );
    }
  }

  personalGreeting(currentUser, logout) {
    if (currentUser) {

      return (
        <hgroup className="header-group">
          <h2 className="header-name">Hi, {currentUser.username}!</h2>
          <a className="header-button" onClick={logout}>Log Out</a>
        </hgroup>
      );
    }
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
              Join the FStop community, share your story, and stay inspired.
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

  userPhotos() {
    if (this.props.loggedIn && this.props.location.pathname === "/") {

      return(
        <section className="user-photos-container">
          <div className="user-photos">
            <UserPhotoIndexContainer />
          </div>
        </section>
      );
    }
  }

  render() {
    const { currentUser, logout, loggedIn } = this.props;

    return (
      <section className="home">
        <nav className="main-nav">
          <nav className="left-nav">
            <ul>
              <li id="logo">
                <Link id="logo-image" to="/">
                  <img src="http://res.cloudinary.com/db1ywnpgj/image/upload/v1495218853/fstop-white_tsdk7k.png"/>
                </Link>
                <Link id="logo-text" to="/">FStop</Link>
              </li>
              <li>
                <Link className="discover-link" to="/discover">Discover</Link>
              </li>
              <li>
                <Link className="user-profile-link" to={`/users/${currentUser.id}`}>
                  {currentUser.username}
                </Link>
              </li>
            </ul>
          </nav>
          <nav className="right-nav">
            {this.sessionLinks()}
            {this.loginFormModal()}
            {this.signupFormModal()}
            {this.personalGreeting(currentUser, logout)}
          </nav>
        </nav>
        {this.landing()}
        {this.userPhotos()}
      </section>
    );
  }
}

export default withRouter(Home);
