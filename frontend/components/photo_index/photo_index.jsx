import React from 'react';
import { Route } from 'react-router-dom';
import PhotoIndexItem from './photo_index_item';

class PhotoIndex extends React.Component {
  componentDidMount() {
    this.props.fetchPhotos();
  }

  render () {
    const { photos } = this.props;
    const photoItems = photos.map((photo) => (
      <PhotoIndexItem key={photo.id} photo={photo} />
    ));

    return (
      <div id="test">
        <a href="#">
          <img src="https://vignette1.wikia.nocookie.net/sanicsource/images/9/97/Doge.jpg/revision/latest?cb=20160112233015"/>
        </a>
        <a href="#">
          <img src="https://images.unsplash.com/photo-1494587416117-f102a2ac0a8d?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg="/>
        </a>
        <a href="#">
          <img src="https://images.unsplash.com/photo-1476111021705-ac3b3304fe20?dpr=1&auto=format&fit=crop&w=1500&h=2249&q=80&cs=tinysrgb&crop=&bg="/>
        </a>
        <a href="#">
          <img src="https://images.unsplash.com/photo-1466853817435-05b43fe45b39?dpr=1&auto=format&fit=crop&w=1500&h=1090&q=80&cs=tinysrgb&crop=&bg="/>
        </a>
        <a href="#">
          <img src="https://images.unsplash.com/photo-1482784160316-6eb046863ece?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg="/>
        </a>
        <a href="#">
          <img src="https://vignette1.wikia.nocookie.net/sanicsource/images/9/97/Doge.jpg/revision/latest?cb=20160112233015"/>
        </a>
        <a href="#">
          <img src="https://images.unsplash.com/photo-1494587416117-f102a2ac0a8d?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg="/>
        </a>
        <a href="#">
          <img src="https://images.unsplash.com/photo-1476111021705-ac3b3304fe20?dpr=1&auto=format&fit=crop&w=1500&h=2249&q=80&cs=tinysrgb&crop=&bg="/>
        </a>
        <a href="#">
          <img src="https://images.unsplash.com/photo-1466853817435-05b43fe45b39?dpr=1&auto=format&fit=crop&w=1500&h=1090&q=80&cs=tinysrgb&crop=&bg="/>
        </a>
        <a href="#">
          <img src="https://images.unsplash.com/photo-1482784160316-6eb046863ece?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg="/>
        </a>
        <a href="#">
          <img src="https://vignette1.wikia.nocookie.net/sanicsource/images/9/97/Doge.jpg/revision/latest?cb=20160112233015"/>
        </a>
        <a href="#">
          <img src="https://images.unsplash.com/photo-1494587416117-f102a2ac0a8d?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg="/>
        </a>
        <a href="#">
          <img src="https://images.unsplash.com/photo-1476111021705-ac3b3304fe20?dpr=1&auto=format&fit=crop&w=1500&h=2249&q=80&cs=tinysrgb&crop=&bg="/>
        </a>
        <a href="#">
          <img src="https://images.unsplash.com/photo-1466853817435-05b43fe45b39?dpr=1&auto=format&fit=crop&w=1500&h=1090&q=80&cs=tinysrgb&crop=&bg="/>
        </a>
        <a href="#">
          <img src="https://images.unsplash.com/photo-1482784160316-6eb046863ece?dpr=1&auto=format&fit=crop&w=1500&h=1000&q=80&cs=tinysrgb&crop=&bg="/>
        </a>
      </div>
    );
  }
}

export default PhotoIndex;
