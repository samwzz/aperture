import React from 'react';
import { Link } from 'react-router-dom';
import PhotoShowContainer from './photo_show_container';
import CommentIndexContainer from '../comment/comment_index_container';
import CommentFormContainer from '../comment/comment_form_container';
import TagIndexContainer from '../tag/tag_index_container';

class PhotoDetail extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddTag = this.handleAddTag.bind(this);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.props.fetchPhoto(this.props.match.params.photoId);
  }

  handleAddTag() {
    return(
      <TagFormContainer photo={this.props.photo} />
    );
  }

  tags() {
    const { photo } = this.props;

  }

  addTag() {
    const { currentUser, photo } = this.props;
    if (currentUser.id === photo.user_id) {
      return(
        <button className="add-tag" onClick={ this.handleAddTag }>
          Add Tag
        </button>
      );
    }
  }

  render () {
    const { photo } = this.props;
    return (
      <div className="photo-detail-container">
        <div className="photo-detail">
          <Link to="/">
            <i className="fa fa-arrow-left"></i>
            <span>Back to all photos</span>
          </Link>
          <PhotoShowContainer photo={this.props.photo} />
        </div>
        <div className="photo-info-container">
          <div className="photo-info">
            <div className="photo-head-group">
              <div className="avatar">
                <div className="avatar-wrapper">
                  <img src="https://res.cloudinary.com/db1ywnpgj/image/upload/v1495431600/Doge_hu9gbb.jpg"/>
                </div>
              </div>
              <div className="photo-header">
                <h1>{photo.user ? photo.user.username : ""}</h1>
                <h2>{photo.title}</h2>
                <p>{photo.description}</p>
              </div>
            </div>
            <CommentIndexContainer />
          </div>
          <TagIndexContainer photo={photo} />
        </div>
      </div>
    );
  }
}

export default PhotoDetail;
