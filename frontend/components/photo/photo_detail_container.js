import { connect } from 'react-redux';
import { fetchPhoto, updatePhoto, deletePhoto, receivePhotoErrors } from '../../actions/photo_actions';
import { selectPhoto } from '../../reducers/selectors';

import PhotoDetail from './photo_show';

const mapStateToProps = (state, { match }) => {
  const photoId = parseInt(match.params.photoId);
  const photo = selectPhoto(state, match.params.photoId);
  return {
    currentUser: state.session.currentUser,
    photoId,
    photo
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchPhoto: id => dispatch(fetchPhoto(id)),
  receivePhotoErrors: err => dispatch(receivePhotoErrors(err))
});

export default connect(
  null,
  mapDispatchToProps
)(PhotoDetail);
