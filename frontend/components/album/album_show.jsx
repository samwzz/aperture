import React from 'react';
import { withRouter } from 'react-router-dom';
import PhotoIndexContainer from '../photo/photo_index_container';
import AlbumModal from '../modal/album_modal';
import UserProfileContainer from '../user_profile/user_profile_container';

class AlbumShow extends React.Component {
  constructor(props) {
    super(props);
    this.confirmDelete = this.confirmDelete.bind(this);
  }

  confirmDelete(e){
    e.preventDefault();
    var result = confirm("Are you sure you want to delete?");
    if (result) {
      this.props.deleteAlbum(this.props.album)
        .then(data => this.props.history.push(`/users/${this.props.currentUser.id}/albums`));
    }
  }

  componentDidMount() {
    this.props.fetchAlbum(this.props.match.params.albumId);
  }

  render() {
    const photos = this.props.album.photos;
    const { album, currentUser } = this.props;

    let editButton, deleteButton;
    if (currentUser) {
      if ( currentUser.id === album.user_id ) {
        editButton = <AlbumModal album={this.props.album}
          receiveAlbumErrors={this.props.receiveAlbumErrors}
          formType="edit"/>;
        deleteButton = <a className='delete-button'
          onClick={this.confirmDelete}>
          <i className="fa fa-trash"></i>
        </a>;
        }
    }
    return(
      <section className="album-photo-index">
        <UserProfileContainer />
        <div className="edit-delete-album">
          {editButton}
          {deleteButton}
        </div>
        <PhotoIndexContainer />
      </section>
    );
  }
}

export default withRouter(AlbumShow);
