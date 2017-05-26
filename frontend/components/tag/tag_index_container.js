import { connect } from 'react-redux';
import { fetchPhotoTags, deleteTag } from '../../actions/tag_actions';
import { selectTags } from '../../reducers/selectors';

import TagIndex from './tag_index';

const mapStateToProps = state => ({
  tags: selectTags(state),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchPhotoTags: (photoId) => dispatch(fetchPhotoTags(photoId)),
  deleteTag: (tag) => dispatch(deleteTag(tag)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagIndex);
