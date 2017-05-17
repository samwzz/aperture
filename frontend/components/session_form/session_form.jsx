import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import Modal from 'react-modal';

const style = {
  overlay : {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    backgroundColor : 'rgba(255, 255, 255, 0.75)',
    zIndex          : 10
  },
  content : {
    position        : 'fixed',
    top             : '100px',
    left            : '150px',
    right           : '150px',
    bottom          : '100px',
    border          : '1px solid #ccc',
    padding         : '20px',
    zIndex          : 11,
    opacity         : 0,
    transition      : 'opacity 1s'
  }
};

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      modalOpen: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.openModal = this.openModal.bind(this);
    // this.closeModal = this.closeModal.bind(this);
    // this.afterModalOpen = this.afterModalOpen.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user);
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <Link to="/signup">Sign Up</Link>;
    } else {
      return <Link to="/login">Log In</Link>;
    }
  }

  renderErrors() {
    return(
      <ul>
        {this.props.errors && this.props.errors.map((error, i) => (
          <li key={`error-${i}`}>
            {error}
          </li>
        ))}
      </ul>
    );
  }

  emailField() {
    if (this.props.formType === 'login') {
      return;
    } else {
      return (
        <div>
          <label>Email:
            <input type="text"
              value={this.state.email}
              onChange={this.update('email')}
              className="login-input"
              />
          </label>
          <br/>
        </div>
      );
    }
  }

  // openModal() {
  //   this.setState({ modalOpen: true });
  // }
  //
  // closeModal() {
  //   this.setState({ modalOpen: false });
  //   style.content.opacity = 0;
  // }
  //
  // afterModalOpen() {
  //   style.content.opacity = 100;
  // }
  //
  // render() {
  //   return(
  //     <div>
  //       <button onClick={this.openModal}>Open Me!</button>
  //
  //       <Modal
  //         isOpen={this.state.modalOpen}
  //         onAfterOpen={this.afterModalOpen}
  //         onRequestClose={this.closeModal}
  //         style={style}
  //         contentLabel="Modal"
  //         >
  //         <h2>Im a modal!</h2>
  //         <p>modal modal modal modal modal</p>
  //         <p>mooooooooodal!</p>
  //         <button onClick={this.closeModal}>Close</button>
  //       </Modal>
  //     </div>
  //   );
  // }
  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
           {this.renderErrors()}
           <div className="login-form">
             <br/>
             <label>Username:
               <input type="text"
                 value={this.state.username}
                 onChange={this.update('username')}
                 className="login-input"
               />
             </label>
             <br />
             {this.emailField()}
             <label>Password:
               <input type="password"
                 value={this.state.password}
                 onChange={this.update('password')}
                 className="login-input"
               />
             </label>
             <br/>
             <input type="submit" value="Submit" />
           </div>
        </form>
      </div>
    );
  }
}

export default withRouter(SessionForm);
