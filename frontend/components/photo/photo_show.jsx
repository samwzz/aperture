import React from 'react';
import { Link } from 'react-router-dom';

const PhotoShow = ({ photo }) => {
  return (
    <div className="photo-show-container">
      <div className="photo-show">
        <h1 className="photo-show-title">{ photo.title }</h1>
        <img className="photo-show-img" src={photo.image_url} />
        <p className="photo-show-description">{ photo.description }</p>
      </div>
    </div>
  );
};

export default PhotoShow;
