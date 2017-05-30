import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import UploadModal from '../modal/upload_modal';

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
    this.confirmDelete = this.confirmDelete.bind(this);
  }

  componentDidMount() {
    this.props.fetchUserAlbums(this.props.currentUser.id);
  }

  handleSelect(e) {
    e.preventDefault();
    this.setState({ album_id: parseInt(e.target.value)},
    () => this.props.updatePhoto(this.state, this.props.photo.id));
  }

  confirmDelete(e){
    e.preventDefault();
    var result = confirm("Are you sure you want to delete?");
    if (result) {
      this.props.deletePhoto(this.props.photo)
        .then(data => this.props.history.push(`/discover`));
    }
    console.log(this.props.history);
  }

  selectAlbum() {
    const {photo, albums, currentUser } = this.props;
    if (photo.user_id === currentUser.id) {
      return(
        <form className="album-select">
          <i className="fa fa-book"></i>
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
    const { photo, currentUser } = this.props;
    let editButton, deleteButton;
    if (currentUser) {
      if ( currentUser.id === photo.user_id ) {
        editButton = <UploadModal photo={this.props.photo}
          receivePhotoErrors={this.props.receivePhotoErrors}
          formType="edit"/>;
        deleteButton = <a className='delete-button'
          onClick={this.confirmDelete}>
          <i className="fa fa-trash"></i>
        </a>;
        }
    }
    return (
      <div className="photo-show-container">
        <div className="photo-show">
          <h1 className="photo-show-title">{ photo.title }</h1>
          <img className="photo-show-img" src={photo.image_url} />
          <p className="photo-show-description">{ photo.description }</p>
        </div>
        <div className="photo-actions">
          <ul className="edit-delete">
            <li>{editButton}</li>
            <li>{deleteButton}</li>
          </ul>
          <div>{this.selectAlbum()}</div>
        </div>
      </div>
    );
  }
}

export default withRouter(PhotoShow);
