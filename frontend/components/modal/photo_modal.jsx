import React from 'react';
import { Link } from 'react-router-dom';
import PhotoShowContainer from '../photo_show/photo_show_container';
import Modal from 'react-modal';
import PhotoModalStyle from './photo_modal_style';

class PhotoModal extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      modalOpen: false
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  // componentDidUpdate() {
  //   $(".photo-modals").justifiedGallery({
  //     rowHeight : 300,
  //     lastRow : 'justify',
  //     margins : 8,
  //     cssAnimation: false
  //   });
  // }

  openModal() {
    this.setState({ modalOpen: true });
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  render() {
    const { photo } = this.props;
    return (
        <div>
          <div className="photo-modal-container">
            <img
              src={photo.image_url}
              onClick={this.openModal}
              className="photo-modal-image"
              />
            <div className="photo-info-container">
              <div className="photo-info">
                <p className="photo-username">
                  User
                </p>
                <p className="photo-title">
                  {photo.title}
                </p>
              </div>
            </div>
          </div>
        <Modal
          isOpen={this.state.modalOpen}

          onRequestClose={this.closeModal}
          style={PhotoModalStyle}
          contentLabel="PhotoModal"
          className="photo-modal"
          >
          <PhotoShowContainer key={photo.id} photo={photo} />
        </Modal>
      </div>
    );
  }
}

export default PhotoModal;
