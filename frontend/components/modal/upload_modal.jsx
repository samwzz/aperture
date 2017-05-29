import React from 'react';
import Modal from 'react-modal';
import PhotoFormContainer from '../photo/photo_form_container';
import UploadModalStyle from './upload_modal_style';

class UploadModal extends React.Component {
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
    let uploadLink;
    if (this.props.formType === "upload") {
      uploadLink = <a className="upload-link"
        onClick={this.openModal}>
        <i className="fa fa-cloud-upload"></i>
        <span>Upload</span>
      </a>;
    } else if (this.props.formType === "edit") {
      uploadLink = <a className="edit-link"
        onClick={this.openModal}>
        <i className="fa fa-pencil-square-o"></i>
        </a>;
    }
    return(
      <div className="upload-modal-container">
        {uploadLink}
        <Modal
          isOpen={this.state.modalOpen}
          onAfterOpen={this.afterModalOpen}
          onRequestClose={this.closeModal}
          style={UploadModalStyle}
          contentLabel="UploadModal"
          className="upload-modal"
          >
          <PhotoFormContainer formType={this.props.formType}
                              photo={this.props.photo}
                              closeModal={this.closeModal}
                              currentUser={this.props.currentUser} />
        </Modal>
      </div>
    );
  }
}

export default UploadModal;
