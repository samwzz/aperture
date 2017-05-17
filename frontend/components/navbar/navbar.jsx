import React from 'react';
import Modal from 'react-modal';
import LoginFormContainer from '../form/login_form_container';
import SignupFormContainer from '../form/signup_form_container';
import FormModalStyle from './form_modal_style';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false,
      formType: ""
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.afterModalOpen = this.afterModalOpen.bind(this);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    this.setState({ modalOpen: true });
    const formType = e.currentTarget.textContent;
    this.setState({ formType });
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  closeModal() {
    this.setState({ modalOpen: false });
    FormModalStyle.content.opacity = 0;
  }

  afterModalOpen() {
    FormModalStyle.content.opacity = 100;
  }

  sessionLinks() {
    if (!this.props.loggedIn) {
      return (
        <nav className="login-signup">
          <button id="login-button" onClick={this.handleClick}>Log In</button>
          <button id="signup-button" onClick={this.handleClick}>Sign Up</button>
        </nav>
      );
    }
  }

  personalGreeting(currentUser, logout) {
    if (currentUser) {
      return (
        <hgroup className="header-group">
          <h2 className="header-name">Hi, {currentUser.username}!</h2>
          <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
      );
    }
  }

  render() {
    const { currentUser, logout, loggedIn } = this.props;
    const form = this.state.formType === "Sign Up" ? <SignupFormContainer /> : <LoginFormContainer/>

    return (
      <nav className="main-nav">
        <nav className="left-nav">
          <h1 className="logo">FStop</h1>
        </nav>
        {this.sessionLinks()}
        <Modal
          isOpen={this.state.modalOpen}
          onAfterOpen={this.afterModalOpen}
          onRequestClose={this.closeModal}
          style={FormModalStyle}
          contentLabel="Modal"
          >
          {form}
          <button onClick={this.closeModal}>Close</button>
        </Modal>
        {this.personalGreeting(currentUser, logout)}
      </nav>
    );
  }
}

export default Navbar;
