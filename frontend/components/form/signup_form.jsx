import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.switchForm = this.switchForm.bind(this);
    this.handleGuestLogin = this.handleGuestLogin.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.signup(user).then(() => this.props.closeSignupModal());
  }

  handleGuestLogin(e) {
    e.preventDefault();
    this.props.login({username: "guest", password: "password"})
      .then(() => this.props.closeSignupModal());
  }

  switchForm(e) {
    e.preventDefault();
    this.props.closeSignupModal();
    this.props.openLoginModal();
    // this.props.receiveErrors([]);
  }

  renderErrors() {
    return(
      <ul className="errors">
        {this.props.errors && this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
          <h1>Join FStop</h1>
          {this.renderErrors()}
          <div className="login-form">
            <label>Username</label>
            <input type="text"
              value={this.state.username}
              onChange={this.update('username')}
              className="login-input"
            />
            <label>Email</label>
            <input type="text"
              value={this.state.email}
              onChange={this.update('email')}
              className="login-input"
              />
            <label>Password</label>
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="login-input"
            />
            <input type="submit" value="Sign up" />
            <div className="login-form-text">
              Already have an account?
              <a href="#" onClick={this.switchForm}> Log in</a>
            </div>
            <div className="login-form-text">or</div>
            <a className="login-form-text" href="#" onClick={this.handleGuestLogin}>
              Continue as guest
            </a>
          </div>
        </form>
      </div>
    );
  }
}

export default SignupForm;
