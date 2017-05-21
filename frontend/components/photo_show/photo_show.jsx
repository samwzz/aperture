import React from 'react';
import { Link } from 'react-router-dom';

class PhotoShow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPhoto(this.props.photo.id);
  }

  render () {
    const { photo } = this.props;
    return (
      <div className="photo-show-container">
        <div className="photo-show">
          <Link to="/discover">Back to photos</Link>
          <h1 className="photo-show-title">{ photo.title }</h1>
          <img className="photo-show-img" src={photo.image_url} />
          <p className="photo-show-description">{ photo.description }</p>
        </div>
      </div>
    );
  }
}

export default PhotoShow;
