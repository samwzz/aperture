import React from 'react';
import { Route } from 'react-router-dom';
import PhotoIndexItem from './photo_index_item';

class PhotoIndex extends React.Component {
  componentDidMount() {
    this.props.fetchPhotos();
  }

  componentDidUpdate() {
    $("#test").justifiedGallery({
      rowHeight : 300,
      lastRow : 'nojustify',
      margins : 3
    });
  }

  render () {
    const { photos } = this.props;
    const photoItems = photos.map((photo) => (
      <PhotoIndexItem key={photo.id} photo={photo} />
    ));

    return (
      <div id="gallery">
        {photoItems}
      </div>
    );
  }
}

export default PhotoIndex;
