import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import PhotoIndexItem from './photo_index_item';
import PhotoModal from '../modal/photo_modal';
import Modal from 'react-modal';

class PhotoIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numPhotos: null
    };
  }

  componentDidMount() {
    const { match, fetchPhotos, fetchUserPhotos, photos } = this.props;
    if (match.path === "/users/:userId") {
      $('#photostream-tab').addClass('active');
      fetchUserPhotos(parseInt(match.params["userId"]))
      .then(() => this.setState({
        numPhotos: photos.length
      }));
    } else {
      fetchPhotos();
    }
    $("#gallery").justifiedGallery({
      rowHeight : 300,
      lastRow : 'justify',
      margins : 9,
      cssAnimation: false,
    });
  }

  componentWillUnmount() {
    $('#photostream-tab').removeClass('active');
  }

  componentDidUpdate() {
    $("#gallery").justifiedGallery("norewind");
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  render () {
    let noPhotos;
    if (this.state.numPhotos === 0) {
      noPhotos = "You will find your photos here. Now, go out and take some photos!";
    }

    const { photos } = this.props;
    const photoModals = photos.map((photo) => (
      <PhotoModal key={`${photo.id}-index`} photo={photo} />
    ));

    return (
      <section className="photo-index">
        <h2 className="no-photo-msg">{noPhotos}</h2>
        <div id="gallery" className="justified-gallery">
          {photoModals}
        </div>
      </section>
    );
  }
}

export default withRouter(PhotoIndex);
