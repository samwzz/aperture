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
    window.scrollTo(0, 0);
    const { fetchPhotos, fetchUserPhotos, currentUser } = this.props;
    if (this.props.location.pathname === `/users/${currentUser.id}`) {
      fetchUserPhotos(currentUser.id)
      .then(() => this.setState({
        numPhotos: this.props.photos.length
      }));
      $('.cover-photo').parallax({imageSrc: 'https://res.cloudinary.com/db1ywnpgj/image/upload/v1495179973/pexels-photo-141635_ueizkw.jpg'});
    } else {
      fetchPhotos();
    }
  }

  componentWillUnmount() {
    $('.parallax-mirror').remove();
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  closeModal() {
    this.setState({ modalOpen: false });
  }

  userProfile() {
    if (this.props.location.pathname === `/users/${this.props.currentUser.id}`) {

    }
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

    return(
      <div className="profile-header-container">
        <div className="cover-photo"></div>
        <div className="header-spacer">
          <div className="avatar">
            <div className="avatar-wrapper">
              <img src="https://res.cloudinary.com/db1ywnpgj/image/upload/v1495431600/Doge_hu9gbb.jpg"/>
            </div>
          </div>
        </div>
        <div className="user-nav">
          <ul className="profile-tabs">
            <li id="photostream-tab">
              <a>Photostream</a>
            </li>
            <li id="album-tab">
              <a>Albums</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default withRouter(PhotoList);
