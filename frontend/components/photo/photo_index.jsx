import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import PhotoIndexItem from './photo_index_item';
import PhotoModal from '../modal/photo_modal';
import Modal from 'react-modal';

class PhotoIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {
    $("#gallery").justifiedGallery({
      rowHeight : 300,
      lastRow : 'nojustify',
      margins : 9,
      cssAnimation: true,
    });
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  render () {
    const { photos } = this.props;
    const photoModals = photos && photos.map((photo) => (
      <PhotoModal key={`${photo.id}-index`} photo={photo} />
    ));

    return (
      <div className="photo-index">
        <div id="gallery" className="justified-gallery">
          {photoModals}
        </div>
      </div>
    );
  }
}

export default withRouter(PhotoIndex);
