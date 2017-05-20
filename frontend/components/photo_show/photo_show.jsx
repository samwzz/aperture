import React from 'react';
import { Link } from 'react-router-dom';

class PhotoShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPhoto(this.props.photoId);
  }

  render () {
    const { photo } = this.props;
    return (
      <div className="photo-show-container">
        <div className="photo-show">
          <Link to="/">Back to photos</Link>
          <h1>{ photo.title }</h1>
          <p>{ photo.description }</p>
          <img className="image" src={photo.image_url} />
        </div>
      </div>
    );
  }
}

export default PhotoShow;
