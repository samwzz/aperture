import React from 'react';
import { Link } from 'react-router-dom';

class PhotoIndexItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render () {
    const { photo } = this.props;

    return(
      <li className="photo-item">
        <Link to={`/photos/${photo.id}`}><img src={photo.image_url} /></Link>
      </li>
    );
  }
}

export default PhotoIndexItem;
