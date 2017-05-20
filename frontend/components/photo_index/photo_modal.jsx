import React from 'react';
import { Link } from 'react-router-dom';
import PhotoShowContainer from '../photo_show/photo_show_container';
import Modal from 'react-modal';
import FormModalStyle from '../navbar/form_modal_style';

const modalstyle = {
  overlay : {
    position        : 'fixed',
    top             : 0,
    left            : 0,
    right           : 0,
    bottom          : 0,
    // backgroundColor : 'rgba(247, 248, 250, 0.97)',
    backgroundColor : 'rgba(0, 0, 0, 0.85)',
    zIndex          : 10
  },
  content : {
    display                    : 'flex',
    "justify-content"          : 'center',
    position                   : 'fixed',
    top                        : '5%',
    left                       : '10%',
    right                      : '10%',
    // border                     : '1px solid black',
    "transform"                : 'translate(0%, 0%)',
    padding                    : '36px',
    overflow                   : 'auto',
    WebkitOverflowScrolling    : 'touch',
    outline                    : 'none',
    borderRadius               : '3px',
    zIndex          : 11,
    opacity         : 100,
    transition      : 'opacity 0.5s'
  }
};
//
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
        <a
          className="photo-modal-item"
          onClick={this.openModal}
          >
          <img className="photo-modal-img" src={photo.image_url}/>
        </a>
        <Modal
          isOpen={this.state.modalOpen}

          onRequestClose={this.closeModal}
          style={modalstyle}
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
