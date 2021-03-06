import React from 'react';
import Modal from 'react-modal';
import CommentFormContainer from '../comment/comment_form_container';
import UploadModalStyle from './upload_modal_style';

class CommentModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  closeModal() {
    this.setState({ modalOpen: false });
    UploadModalStyle.content.opacity = 0;
  }

  afterModalOpen() {
    UploadModalStyle.content.opacity = 100;
  }

  render() {
    return(
      <div className="album-modal-container">
        <a className="edit-comment"
            onClick={this.openModal}>
          <i className="fa fa-pencil-square-o"></i>
        </a>
        <Modal
          isOpen={this.state.modalOpen}
          onAfterOpen={this.afterModalOpen}
          onRequestClose={this.closeModal}
          style={UploadModalStyle}
          contentLabel="UploadModal"
          className="upload-modal"
          >
          <h1>Edit comment</h1>
          <CommentFormContainer formType="edit"
                                comment={this.props.comment}
                                closeModal={this.closeModal}
                                currentUser={this.props.currentUser} />
        </Modal>
      </div>
    );
  }
}

export default CommentModal;
