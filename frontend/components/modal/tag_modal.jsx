import React from 'react';
import Modal from 'react-modal';
import TagFormContainer from '../tag/tag_form_container';
import UploadModalStyle from './upload_modal_style';

class TagModal extends React.Component {
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
        <button className="add-tag"
            onClick={this.openModal}>Add Tag</button>
        <Modal
          isOpen={this.state.modalOpen}
          onAfterOpen={this.afterModalOpen}
          onRequestClose={this.closeModal}
          style={UploadModalStyle}
          contentLabel="UploadModal"
          className="upload-modal"
          >
          <h1>Add Tag</h1>
          <TagFormContainer photo={this.props.photo}
                            closeModal={this.closeModal} />
        </Modal>
      </div>
    );
  }
}

export default TagModal;
