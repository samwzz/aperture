import React from 'react';
import Modal from 'react-modal';
import AlbumFormContainer from '../album/album_form_container';
import UploadModalStyle from './upload_modal_style';

class AlbumModal extends React.Component {
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
    let albumLink;
    if (this.props.formType === "new") {
      albumLink = <a className="new-album"
        onClick={this.openModal}>
        <i className="fa fa-plus"></i>
      </a>;
    } else if (this.props.formType === "edit") {
      albumLink = <a className="edit-album"
        onClick={this.openModal}>
        <i className="fa fa-pencil-square-o"></i>
      </a>;
    }
    return(
      <div className="album-modal-container">
        {albumLink}
        <Modal
          isOpen={this.state.modalOpen}
          onAfterOpen={this.afterModalOpen}
          onRequestClose={this.closeModal}
          style={UploadModalStyle}
          contentLabel="UploadModal"
          className="upload-modal"
          >
          <AlbumFormContainer formType={this.props.formType}
                              album={this.props.album}
                              closeModal={this.closeModal}
                              currentUser={this.props.currentUser} />
        </Modal>
      </div>
    );
  }
}

export default AlbumModal;
