import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import PhotoShowContainer from '../photo/photo_show_container';
import Modal from 'react-modal';
import PhotoModalStyle from './photo_modal_style';
import classNames from 'classnames';

class PhotoModal extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      modalOpen: false,
      filter: {
        brighter: false,
        darker: false,
        contrast: false,
        saturate: false,
        grayscale: false,
        sepia: false,
        invert: false,
        blur: false,
        fade: false,
        opacity: false
      }
    };
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.afterModalOpen = this.afterModalOpen.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.resetFilters = this.resetFilters.bind(this);
    this.brighter = this.brighter.bind(this);
    this.darker = this.darker.bind(this);
    this.contrast = this.contrast.bind(this);
    this.saturate = this.saturate.bind(this);
    this.grayscale = this.grayscale.bind(this);
    this.sepia = this.sepia.bind(this);
    this.invert = this.invert.bind(this);
    this.blur = this.blur.bind(this);
    this.fade = this.fade.bind(this);
    this.opacity = this.opacity.bind(this);
  }

  handleClick() {
    this.props.history.push(`/photos/${this.props.photo.id}`);
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

  resetFilters() {
    this.setState({
      filter: {
        brighter: false,
        darker: false,
        contrast: false,
        saturate: false,
        grayscale: false,
        sepia: false,
        invert: false,
        blur: false,
        fade: false,
        opacity: false
      }
    });
  }

  brighter() {
    this.setState({ filter: { brighter: true }});
  }

  darker() {
    this.setState({ filter: { darker: true }});
  }

  contrast() {
    this.setState({ filter: { contrast: true }});
  }

  saturate() {
    this.setState({ filter: { saturate: true }});
  }

  grayscale() {
    this.setState({ filter: { grayscale: true }});
  }

  sepia() {
    this.setState({ filter: { sepia: true }});
  }

  invert() {
    this.setState({ filter: { invert: true }});
  }

  blur() {
    this.setState({ filter: { blur: true }});
  }

  fade() {
    this.setState({ filter: { fade: true }});
  }

  opacity() {
    this.setState({ filter: { opacity: true }});
  }

  render() {
    const { photo } = this.props;
    return (
        <div>
          <div className="photo-modal-container">
            <div onClick={this.openModal} className="gradient">
              <h1>{photo.title}</h1>
            </div>
            <div className="filter-menu-container">
              <div className="filter-menu">
                <button onClick={this.resetFilters}><p>Reset</p></button>
                <button onClick={this.brighter}>Brighter</button>
                <button onClick={this.darker}>Darker</button>
                <button onClick={this.contrast}>Contrast</button>
                <button onClick={this.saturate}>Saturate</button>
                <button onClick={this.grayscale}>Grayscale</button>
                <button onClick={this.sepia}>Sepia</button>
                <button onClick={this.invert}>Invert</button>
                <button onClick={this.blur}>Blur</button>
                <button onClick={this.fade}>Fade</button>
                <button onClick={this.opacity}>Opacity</button>
              </div>
              <div className="filter-menu-button">
                <i className="fa fa-angle-double-down"></i>
              </div>
            </div>
            <img
              onClick={this.openModal}
              src={photo.image_url}
              className={`photo-modal-image ${classNames(this.state.filter)}`}
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
          <div className="photo-header">
            <h1>{photo.user.username}</h1>
            <h2>{photo.title}</h2>
          </div>
          <div className="detail-button-container">
            <button className="see-photo-detail" onClick={this.handleClick}>See photo detail</button>
          </div>
        </Modal>
      </div>
    );
  }
}

export default withRouter(PhotoModal);
