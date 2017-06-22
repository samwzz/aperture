import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import PhotoIndexItem from './photo_index_item';
import PhotoModal from '../modal/photo_modal';
import Modal from 'react-modal';

class PhotoIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      randomize: false
    };
  }

  fetchPhotos() {
    const { match, fetchAllPhotos, fetchUserPhotos, fetchAlbumPhotos } = this.props;

    // decide whether to fetch all photos, only user photos, or album photos
    if (match.path === "/users/:userId") {
      return fetchUserPhotos(parseInt(match.params.userId));
    } else if (match.path === "/users/:userId/albums/:albumId") {
      return fetchAlbumPhotos(parseInt(match.params.albumId));
    } else {
      this.setState({ randomize: true });
      return fetchAllPhotos();
    }
  }

  componentWillMount() {
    this.fetchPhotos().then(() => {
      $("#gallery").justifiedGallery({
        rowHeight : 300,
        lastRow : 'justify',
        margins : 9,
        randomize: this.state.randomize
      }, "norewind");
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
