import React from 'react';
import Modal from 'react-modal';
import { Link, withRouter } from 'react-router-dom';
import LoginFormContainer from '../session_form/login_form_container';
import SignupFormContainer from '../session_form/signup_form_container';
import FormModalStyle from '../modal/form_modal_style';
import PhotoListContainer from '../photo/photo_list_container';
import UploadModal from '../modal/upload_modal';

class Navbar extends React.Component {
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
      const { currentUser } = this.props;
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
          <Link className="user-profile-link" to={`/users/${currentUser.id}`}>
            <i className="fa fa-user"></i>
            <span>{currentUser.username}</span>
          </Link>
          <a className="header-button" onClick={logout}>
            <i className="fa fa-sign-out"></i>
            <span>Log Out</span>
          </a>
          <UploadModal receivePhotoErrors={this.props.receivePhotoErrors}
            currentUser={this.props.currentUser}
            formType="upload" />
        </hgroup>
      );
    }
  }

  discover() {
    if (this.props.loggedIn) {
      return(
        <Link className="discover-link" to="/discover">
          <i className="fa fa-compass"></i>
          <span>Discover</span>
        </Link>
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

  render() {
    const { currentUser, logout, loggedIn } = this.props;

    return (
      <nav className="main-nav">
        <nav className="left-nav">
          <ul>
            <li id="logo">
              <Link id="logo-image" to="/">
                <img src="http://res.cloudinary.com/db1ywnpgj/image/upload/v1495218853/aperture_logo_white.png"/>
              </Link>
              <Link id="logo-text" to="/">Aperture</Link>
            </li>
            <li>
              {this.discover()}
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
    );
  }
}

export default withRouter(Navbar);
