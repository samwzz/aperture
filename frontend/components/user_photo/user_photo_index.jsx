import React from 'react';
import { Route } from 'react-router-dom';
import PhotoIndexItem from '../photo_index/photo_index_item';
import PhotoModal from '../modal/photo_modal';
import Modal from 'react-modal';

class UserPhotoIndex extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numPhotos: null
    };
  }

  componentDidMount() {
    const { fetchUserPhotos, currentUser } = this.props;
    fetchUserPhotos(currentUser.id)
    .then(() => this.setState({
      numPhotos: this.props.photos.length
    }));
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  render () {
    const { photos } = this.props;
    const photoModals = photos.map((photo) => (
      <PhotoModal className="photo-modal" key={`${photo.id}-user`} photo={photo} />
    ));
    let noPhotos;
    if (this.state.numPhotos === 0) {
      noPhotos = "Go out and take some photos!";
    }

    return (
      <section className="user-profile-container">
        <div className="profile-header-container">
          <div className="cover-photo"></div>
          <div className="user-navigation">
            <ul className="profile-tabs">
              <li id="photostream-tab">
                Photostream
              </li>
              <li id="album-tab">
                Albums
              </li>
            </ul>
          </div>
        </div>
        <div className="user-photo-index">
          <h2>{noPhotos}</h2>
          {photoModals}
        </div>
      </section>
    );
  }
}

export default UserPhotoIndex;
