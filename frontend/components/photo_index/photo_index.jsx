import React from 'react';
import { Route } from 'react-router-dom';
import PhotoIndexItem from './photo_index_item';

class PhotoIndex extends React.Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render () {
    const { photos } = this.props;
    const photoItems = photos.map((photo) => (
      <PhotoIndexItem key={photo.id} photo={photo} />
    ));

    return (
      <section className="photo-index">
        <ul className="photo-list">
          { photoItems }
        </ul>
      </section>
    );
  }
}

export default PhotoIndex;
