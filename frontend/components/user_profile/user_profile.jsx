import React from 'react';
import PhotoListContainer from '../photo_list/photo_list_container';

class UserProfile extends React.Component {
  componentDidMount() {
    $('.cover-photo').parallax({imageSrc: 'https://res.cloudinary.com/db1ywnpgj/image/upload/v1495179973/pexels-photo-141635_ueizkw.jpg'});
  }

  componentWillUnmount() {
    $('.parallax-mirror').remove();
  }

  render () {
    return(
      <section className="user-profile">
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
        <PhotoListContainer />
      </section>
    );
  }
}

export default UserProfile;
