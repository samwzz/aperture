import React from 'react';
import {withRouter, Route } from 'react-router-dom';
import CommentIndexItem from '../comment/comment_index_item';
import CommentFormContainer from '../comment/comment_form_container';

class CommentIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchPhotoComments(parseInt(this.props.match.params.photoId));
  }

  render () {
    const { comments, currentUser, deleteComment } = this.props;
    const commentItems = comments && comments.map((comment) => (
      <CommentIndexItem
        key={`${comment.id}`}
        comment={comment}
        currentUser={currentUser}
        deleteComment={deleteComment}
      />
    ));

    return (
      <section className="comment-index-container">
        <ul className="comment-index">
          {commentItems}
          <CommentFormContainer formType="new"/>
        </ul>
      </section>
    );
  }
}

export default withRouter(CommentIndex);
