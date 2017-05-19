import React from 'react';
import { Route } from 'react-router-dom';
import PhotoIndexItem from './photo_index_item';

class PhotoIndex extends React.Component {
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

  render () {
    const { photos } = this.props;
    const photoItems = photos.map((photo) => (
      <PhotoIndexItem key={photo.id} photo={photo} />
    ));

    return (
      <div className="gallery">
        {photoItems}
      </div>
    );
  }
}

export default PhotoIndex;
