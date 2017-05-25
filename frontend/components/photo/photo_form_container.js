import { connect } from 'react-redux';
import { createPhoto, updatePhoto, receivePhotoErrors } from '../../actions/photo_actions';
import PhotoForm from './photo_form';

const mapStateToProps = ({ session, photos }) => ({
  currentUser: session.currentUser,
  errors: photos.errors
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createPhoto: (photo) => dispatch(createPhoto(photo)),
  updatePhoto: (photo, id) => dispatch(updatePhoto(photo, id)),
  receivePhotoErrors: (err) => dispatch(receivePhotoErrors(err)),
  closeModal: () => ownProps.closeModal()
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoForm);
