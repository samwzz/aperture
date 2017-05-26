import { connect } from 'react-redux';
import { fetchPhoto, updatePhoto, deletePhoto, receivePhotoErrors } from '../../actions/photo_actions';
import { createTag, deleteTag } from '../../actions/tag_actions';
import { selectPhoto } from '../../reducers/selectors';

import PhotoDetail from './photo_detail';

const mapStateToProps = (state, { match }) => {
  const photoId = parseInt(match.params.photoId);
  const photo = selectPhoto(state, match.params.photoId) || {user: {}};
  return {
    currentUser: state.session.currentUser,
    photoId,
    photo
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchPhoto: id => dispatch(fetchPhoto(id)),
  updatePhoto: photo => dispatch(updatePhoto(photo)),
  deletePhoto: photo => dispatch(deletePhoto(photo)),
  createTag: tag => dispatch(createTag(tag)),
  deleteTag: tag => dispatch(deleteTag(tag)),
  receivePhotoErrors: err => dispatch(receivePhotoErrors(err))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoDetail);
