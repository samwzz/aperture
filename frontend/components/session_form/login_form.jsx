import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
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
    this.props.login(user).then(() => this.props.closeLoginModal());
  }

  handleGuestLogin(e) {
    e.preventDefault();
    this.props.login({username: "guest", password: "password"})
      .then(() => this.props.closeLoginModal());
  }

  switchForm(e) {
    e.preventDefault();
    this.props.closeLoginModal();
    this.props.openSignupModal();
    this.props.receiveErrors([]);
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
          <div className="form-logo">
            <img src="https://res.cloudinary.com/db1ywnpgj/image/upload/v1495219123/fstop_pz6x63.png"/>
          </div>
          <h1>Log In to Aperture</h1>
          {this.renderErrors()}
          <div className="login-form">
            <label>Username</label>
            <input type="text"
              value={this.state.username}
              onChange={this.update('username')}
              className="login-input"
            />
            <label>Password</label>
            <input type="password"
              value={this.state.password}
              onChange={this.update('password')}
              className="login-input"
            />
            <input type="submit" value="Log in" />
            <div className="login-form-text">
              Don't have an account?
              <a href="#" onClick={this.switchForm}> Sign up</a>
            </div>
            <div className="login-form-text">or</div>
            <div className="login-form-text">
              <a href="#" onClick={this.handleGuestLogin}>
                Continue as guest
              </a>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginForm;
