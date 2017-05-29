import { connect } from 'react-redux';
import { createComment, updateComment, receiveCommentErrors } from '../../actions/comment_actions';
import CommentForm from './comment_form';

const mapStateToProps = ({ session, comments }, { photoId }) => ({
  currentUser: session.currentUser,
  commentErrors: comments.commentErrors,
  photoId
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createComment: (comment) => dispatch(createComment({ comment })),
  updateComment: (comment, id) => dispatch(updateComment({ comment }, id)),
  receiveCommentErrors: (err) => dispatch(receiveCommentErrors(err)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentForm);
