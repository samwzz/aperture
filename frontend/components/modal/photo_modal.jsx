import React from 'react';
import { Link } from 'react-router-dom';
import PhotoShowContainer from '../photo/photo_show_container';
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
    this.afterModalOpen = this.afterModalOpen.bind(this);
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
    PhotoModalStyle.content.opacity = 0;
  }

  afterModalOpen() {
    PhotoModalStyle.content.opacity = 100;
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
            <div className="photo-heading-container">
              <div className="comment-icon">
                <div className="icon-wrapper">
                  <img src="https://res.cloudinary.com/db1ywnpgj/image/upload/v1495431600/Doge_hu9gbb.jpg"/>
                </div>
              </div>
              <div className="photo-heading">
                <p className="photo-username">
                  {photo.user.username}
                </p>
                <p className="photo-title">
                  {photo.title}
                </p>
              </div>
            </div>
          </div>
        <Modal
          isOpen={this.state.modalOpen}
          onAfterOpen={this.afterModalOpen}
          onRequestClose={this.closeModal}
          style={PhotoModalStyle}
          contentLabel="PhotoModal"
          className="photo-modal"
          >
          <a onClick={this.closeModal}>Back to photos</a>
          <PhotoShowContainer key={photo.id} photo={photo} />
          <Link to={`/photos/${photo.id}`}>See photo detail</Link>
        </Modal>
      </div>
    );
  }
}

export default PhotoModal;
