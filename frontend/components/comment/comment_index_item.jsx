import React from 'react';
import { Link } from 'react-router-dom';
import CommentModal from '../modal/comment_modal';

class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      editComment: false
    };
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    const { comment, deleteComment } = this.props;
    deleteComment(comment);
    delete this.props;
  }

  buttons() {
    const { comment, currentUser } = this.props;
    let editButton, deleteButton;
    if (currentUser) {
      if ( currentUser.id === comment.user_id ) {
        editButton =
        <CommentModal comment={this.props.comment}
          receiveCommentErrors={this.props.receiveCommentErrors}
        />;
        deleteButton =
        <button className="edit-delete" onClick={ this.handleDelete }>
          Delete
        </button>;
        }
    }
    return(
      <div className="comment-action-container">
        {editButton}
        {deleteButton}
      </div>
    );
  }

  comment() {
    if (!this.state.editComment) {
      return(
        <div className="comment-container">
          <p>{this.props.comment.body}</p>
        </div>
      );
    }
  }

  render () {
    const {currentUser, comment } = this.props;

    return(
      <li className="comment-item-container">
        <div className="comment-icon">
          <div className="icon-wrapper">
            <img src="https://res.cloudinary.com/db1ywnpgj/image/upload/v1495431600/Doge_hu9gbb.jpg"/>
          </div>
        </div>
        <div className="comment-item">
          <div className="comment-header">
            <div className="comment-author">
              <h2>{comment.user.username}</h2>
              <span>{comment.ago} ago</span>
            </div>
            {this.buttons()}
          </div>
          {this.comment()}
        </div>
      </li>
    );
  }
}

export default CommentIndexItem;
