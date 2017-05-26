import React from 'react';
import { Link } from 'react-router-dom';
import PhotoShowContainer from './photo_show_container';
import UploadModal from '../modal/upload_modal';
import CommentIndexContainer from '../comment/comment_index_container';
import CommentFormContainer from '../comment/comment_form_container';

class PhotoDetail extends React.Component {
  constructor(props) {
    super(props);
    this.confirmDelete = this.confirmDelete.bind(this);
  }

  componentDidMount() {
    this.props.fetchPhoto(this.props.match.params.photoId);
  }

  confirmDelete(e){
    e.preventDefault();
    var result = confirm("Are you sure you want to delete?");
    if (result) {
      this.props.deletePhoto(this.props.photo)
        .then(data => this.props.history.push(`/discover`));
    }
  }

  render () {
    const { photo, currentUser } = this.props;
    let editButton, deleteButton;
    if (currentUser) {
      if ( currentUser.id === photo.user_id ) {
        editButton = <UploadModal photo={this.props.photo}
          receivePhotoErrors={this.props.receivePhotoErrors}
          formType="edit"/>;
        deleteButton = <button className='delete-button'
          onClick={this.confirmDelete}>Delete Photo</button>;
        }
    }

    return (
      <div className="photo-detail-container">
        <Link to="/">Back to all photos</Link>
        <div className="photo-detail">
          <PhotoShowContainer photo={this.props.photo} />
          {editButton}
          {deleteButton}
        </div>
        <div className="comment-container">
          <CommentIndexContainer />
        </div>
      </div>
    );
  }
}

export default PhotoDetail;
