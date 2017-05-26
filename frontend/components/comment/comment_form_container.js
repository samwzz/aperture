import { connect } from 'react-redux';
import { createComment, updateComment, receiveCommentErrors } from '../../actions/comment_actions';
import CommentForm from './comment_form';

const mapStateToProps = ({ session, comments }) => ({
  currentUser: session.currentUser,
  errors: comments.errors
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
