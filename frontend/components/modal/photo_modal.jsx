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
            <div onClick={this.openModal} className="gradient">
              <h1>{photo.title}</h1>
            </div>
            <img
              onClick={this.openModal}
              src={photo.image_url}
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
          <a onClick={this.closeModal} className="back">
            <i className="fa fa-arrow-left"></i>
            <span>Back to photos</span>
          </a>
          <PhotoShowContainer key={photo.id} photo={photo} />
          <Link className="see-photo-detail" to={`/photos/${photo.id}`}>See photo detail</Link>
        </Modal>
      </div>
    );
  }
}

export default PhotoModal;
