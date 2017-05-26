import React from 'react';
import {withRouter, Route } from 'react-router-dom';
import CommentIndexItem from '../comment/comment_index_item';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPhotoComments(this.props.currentUser.id);
  }

  render () {
    const { comments, currentUser } = this.props;
    const commentItems = comments.map((comment) => (
      <CommentIndexItem key={`${comment.id}`} comment={comment} currentUser={currentUser} />
    ));

    return (
      <section className="comment-index-container">
        <div className="comment-index">
          {commentItems}
        </div>
      </section>
    );
  }
}

export default withRouter(CommentIndex);
