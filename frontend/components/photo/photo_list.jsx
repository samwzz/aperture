import React from 'react';
import { withRouter, Route } from 'react-router-dom';
import PhotoIndexItem from '../photo/photo_index_item';
import PhotoModal from '../modal/photo_modal';
import Modal from 'react-modal';

class PhotoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numPhotos: null
    };
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    const { fetchPhotos, fetchUserPhotos, currentUser } = this.props;
    if (this.props.match.path === "/users/:userId") {
      $('#photostream-tab').addClass('active');
      fetchUserPhotos(currentUser.id)
      .then(() => this.setState({
        numPhotos: this.props.photos.length
      }));
    } else {
      fetchPhotos();
    }
  }

  componentWillUnmount() {
    $('#photostream-tab').removeClass('active');
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  render () {
    const { photos } = this.props;
    const photoModals = photos.reverse().map((photo) => (
      <PhotoModal className="photo-modal" key={`${photo.id}-user`} photo={photo} />
    ));
    let noPhotos;
    if (this.state.numPhotos === 0) {
      noPhotos = "You will find your photos here. Now, go out and take some photos!";
    }

    return (
      <section className="photo-list-container">
        <div className="photo-list">
          <h2 className="no-photo-msg">{noPhotos}</h2>
          {photoModals}
        </div>
      </section>
    );
  }
}

export default withRouter(PhotoList);
