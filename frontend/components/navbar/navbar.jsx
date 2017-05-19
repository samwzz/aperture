import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import FormModalStyle from './form_modal_style';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      LoginModalOpen: false,
      SignupModalOpen: false
    };
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.openLoginModal = this.openLoginModal.bind(this);
    this.closeLoginModal = this.closeLoginModal.bind(this);
    this.clearErrorsAndCloseLogin = this.clearErrorsAndCloseLogin.bind(this);

    this.handleSignupClick = this.handleSignupClick.bind(this);
    this.openSignupModal = this.openSignupModal.bind(this);
    this.closeSignupModal = this.closeSignupModal.bind(this);
    this.clearErrorsAndCloseSignup = this.clearErrorsAndCloseSignup.bind(this);

    this.afterModalOpen = this.afterModalOpen.bind(this);
  }

  handleLoginClick(e) {
    e.preventDefault();
    this.setState({ LoginModalOpen: true });
  }

  openLoginModal() {
    this.setState({ LoginModalOpen: true });
  }

  clearErrorsAndCloseLogin() {
    this.props.receiveErrors([]);
    this.closeLoginModal();
  }

  closeLoginModal() {
    this.setState({ LoginModalOpen: false });
    FormModalStyle.content.opacity = 0;
  }

  handleSignupClick(e) {
    e.preventDefault();
    this.setState({ SignupModalOpen: true });
  }

  openSignupModal() {
    this.setState({ SignupModalOpen: true });
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
              <a id="login" onClick={this.handleLoginClick}>Log in</a>
            </li>
            <li>
              <a id="signup" onClick={this.handleSignupClick}>Sign Up</a>
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

  render() {
    const { currentUser, logout, loggedIn } = this.props;

    return (
      <nav className="main-nav">
        <nav className="left-nav">
          <ul>
            <li id="logo-image">
              <img src="http://res.cloudinary.com/db1ywnpgj/image/upload/v1495218853/fstop-white_tsdk7k.png"/>
            </li>
            <li id="logo-text">
              <Link to="/">FStop</Link>
            </li>
          </ul>
        </nav>
        <nav className="right-nav">
          {this.sessionLinks()}
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
          {this.personalGreeting(currentUser, logout)}
        </nav>
      </nav>
    );
  }
}

export default Navbar;
