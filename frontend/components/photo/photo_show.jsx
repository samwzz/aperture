import React from 'react';
import { Link } from 'react-router-dom';

class PhotoShow extends React.Component {
  constructor(props) {
    super(props);
    const { photo } = this.props;
    this.state = {
      id: photo.id,
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

  handleSelect(e) {
    e.preventDefault();
    this.setState({ album_id: parseInt(e.target.value)},
    () => this.props.updatePhoto(this.state, this.props.photo.id));
  }

  selectAlbum() {
    console.log(this.state);
    const {photo, albums, currentUser } = this.props;
    if (photo.user_id === currentUser.id) {
      return(
        <form className="album-select">
          <select
            onChange={this.handleSelect}
            defaultValue="Select Album">
            <option key="disabled">Choose album</option>
            {albums.map((album, i) => {
              return <option value={album.id} key={i}>{album.title}</option>;
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
