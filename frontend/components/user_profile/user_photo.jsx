import React from 'react';
import PhotoIndexContainer from '../photo/photo_index_container';
import UserProfileContainer from './user_profile/user_profile_container';

class UserPhoto extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      numPhotos: null
    });
  }

  componentDidMount() {
    this.props.fetchUserPhotos(parseInt(this.props.match.params["userId"]))
    .then(() => this.setState({
      numPhotos: this.props.photos.length
    }));
  }

  render() {
    let noPhotos;

    if (this.state.numPhotos === 0) {
      noPhotos = "You will find your photos here. Now, go out and take some photos!";
    }

    return(
      <div>
        <UserProfileContainer photos={this.props.photos}/>
        <section className="user-photo">
          <h2 className="no-photo-msg">{noPhotos}</h2>
          <PhotoIndexContainer />
        </section>
      </div>
    );
  }
}

export default UserPhoto;
