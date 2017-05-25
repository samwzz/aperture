import React from 'react';
import { Link } from 'react-router-dom';

class AlbumIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const {currentUser, album } = this.props;
    return(
      <div className="album-item-container">
        <div className="back-layer"></div>
        <div className="mid-layer"></div>
        <div className="album-item">
          <Link to={`/users/${currentUser.id}/albums/${album.id}`}>
            <img src={album.photos[0].image_url} />
          </Link>
        </div>
      </div>
    );
  }
}

export default AlbumIndexItem;
