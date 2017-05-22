import React from 'react';
import { Link } from 'react-router-dom';

class AlbumIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { album } = this.props;
    return(
      <div className="album-item">
        <a>
          <img src={album.photos[0].image_url} />
        </a>
      </div>
    );
  }
}

export default AlbumIndexItem;
