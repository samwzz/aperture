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
      <div className="photo-show">
        <Link to="/">Back to Photos Index</Link>
        <h1>{ photo.title }</h1>
        <p>{ photo.description }</p>
        <img src={photo.image_url} />
      </div>
    );
  }
}

export default PhotoShow;
