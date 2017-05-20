import React from 'react';
import { Route } from 'react-router-dom';
import PhotoIndexItem from './photo_index_item';
import PhotoModal from './photo_modal';
import Modal from 'react-modal';

class PhotoIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPhotos();
  }

  componentDidUpdate() {
    $(".gallery").justifiedGallery({
      rowHeight : 300,
      lastRow : 'justify',
      margins : 8,
      cssAnimation: false
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
    const photoItems = photos.map((photo) => (
      <PhotoModal key={photo.id} photo={photo} />
    ));

    return (
      <div className="gallery">
        {photoItems}
      </div>
    );
  }
}

export default PhotoIndex;
