import React from 'react';
import { Route } from 'react-router-dom';
import PhotoIndexItem from './photo_index_item';
import Modal from 'react-modal';

class PhotoIndex extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      modalOpen: false
    };
  }

  componentDidMount() {
    this.props.fetchPhotos();
  }

  componentDidUpdate() {
    $(".photo-list").justifiedGallery({
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
        <div className="photo-list">
          {photoItems}
        </div>

      
      </div>
    );
  }
}

export default PhotoIndex;
