import React from 'react';
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

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.afterModalOpen = this.afterModalOpen.bind(this);
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

  openModal() {
    this.setState({ modalOpen: true });
  }

  closeModal() {
    this.setState({ modalOpen: false });
    style.content.opacity = 0;
  }

  afterModalOpen() {
    style.content.opacity = 100;
  }

  render() {
    return(
      <div>
        <button onClick={this.openModal}>Open Me!</button>

        <Modal
          isOpen={this.state.modalOpen}
          onAfterOpen={this.afterModalOpen}
          onRequestClose={this.closeModal}
          style={style}
          contentLabel="Modal"
          >
          <h2>Im a modal!</h2>
          <p>modal modal modal modal modal</p>
          <p>mooooooooodal!</p>
          <button onClick={this.closeModal}>Close</button>
        </Modal>
      </div>
    );
  }

  // render() {
  //   const { currentUser, logout } = this.props;
  //
  //   return(
  //     <div>
  //       {this.personalGreeting(currentUser, logout)}
  //     </div>
  //   );
  // }
}

export default Navbar;
