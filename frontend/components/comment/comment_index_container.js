import { connect } from 'react-redux';
import { fetchPhotoComments } from '../../actions/comment_actions';
import { selectComments } from '../../reducers/selectors';

import CommentIndex from './comment_index';

const mapStateToProps = state => ({
  comments: selectComments(state),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchPhotoComments: (photoId) => dispatch(fetchPhotoComments(photoId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CommentIndex);
