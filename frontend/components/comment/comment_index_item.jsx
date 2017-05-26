import React from 'react';
import { Link } from 'react-router-dom';

class CommentIndexItem extends React.Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete(e) {
    e.preventDefault();
    const { comment, deleteComment } = this.props;
    deleteComment(comment);
    delete this.props;
  }

  render () {
    const {currentUser, comment } = this.props;

    return(
      <li className="comment-item-container">
        <div className="comment-item">
          <h2>{comment.user_id}</h2>
          <span>{comment.updated_at}</span>
          <div className="delete-button-container">
            <button className="delete-button" onClick={ this.handleDelete }>
              Delete
            </button>
          </div>
          <div className="comment-container">
            <p>{comment.body}</p>
          </div>
        </div>
      </li>
    );
  }
}

export default CommentIndexItem;
