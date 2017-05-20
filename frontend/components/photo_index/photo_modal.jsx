import React from 'react';
import PhotoIndexItem from './photo_index_item';

class PhotoModal {
  constructor (props) {
    super(props);
    this.state = {
      modalOpen: false
    };
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  render() {
    const { photo } = this.props;
    return (
      <Modal
        isOpen={this.state.modalOpen}

        onRequestClose={this.closeModal}

        contentLabel="PhotoModal"
        className="photo-modal"
        >
        <PhotoIndexItem key={photo.id} photo={photo} />
      </Modal>
    );
  }
}
