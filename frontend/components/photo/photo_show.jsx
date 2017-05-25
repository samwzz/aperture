import React from 'react';
import { Link } from 'react-router-dom';

class PhotoShow extends React.Component {
  constructor(props) {
    super(props);
    const { photo } = this.props;
    this.state = {
      title: photo.title,
      description: photo.description,
      image_url: photo.image_url,
      user_id: photo.user_id,
      album_id: photo.album_id
    };
    this.handleSelect = this.handleSelect.bind(this);
  }

  componentDidMount() {
    this.props.fetchUserAlbums(this.props.currentUser.id);
  }

  updateAlbum() {
    return e => this.setState({ album_id: e.target.value.id });
  }

  handleSelect(e) {
    e.preventDefault();
    this.updateAlbum();
    this.props.updatePhoto(this.state);
  }

  selectAlbum() {
    const {photo, albums, currentUser } = this.props;
    if (photo.user_id === currentUser.id) {
      return(
        <form className="album-select">
          <select
            value={this.state.album}
            onChange={this.handleSelect}
            defaultValue="Select Album">
            {albums.map((album, i) => {
              return <option value={album} key={i}>{album.title}</option>;
              })}
            </select>
          </form>
      );
    }
  }

  render() {
    const { photo } = this.props;
    return (
      <div className="photo-show-container">
        <div className="photo-show">
          <h1 className="photo-show-title">{ photo.title }</h1>
          <img className="photo-show-img" src={photo.image_url} />
          <p className="photo-show-description">{ photo.description }</p>
        </div>
        {this.selectAlbum()}
      </div>
    );
  }
}

export default PhotoShow;
