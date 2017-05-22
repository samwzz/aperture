import React from 'react';
import { withRouter, Route } from 'react-router-dom';
import PhotoIndexItem from '../photo_index/photo_index_item';
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
    const { fetchPhotos, fetchUserPhotos, currentUser } = this.props;
    if (this.props.location.pathname === `/users/${currentUser.id}`) {
      fetchUserPhotos(currentUser.id)
      .then(() => this.setState({
        numPhotos: this.props.photos.length
      }));
    } else {
      fetchPhotos();
    }
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  userProfile() {
    return(
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
    );
  }

  render () {
    const { photos } = this.props;
    const photoModals = photos.map((photo) => (
      <PhotoModal className="photo-modal" key={`${photo.id}-user`} photo={photo} />
    ));
    let noPhotos;
    if (this.state.numPhotos === 0) {
      noPhotos = "You will find your photos here. Now, go out and take some photos!";
    }

    return (
      <section className="photo-list-container">
        {this.userProfile()}
        <div className="photo-list">
          <h2 className="no-photo-msg">{noPhotos}</h2>
          {photoModals}
        </div>
      </section>
    );
  }
}

export default withRouter(PhotoList);
