import { connect } from 'react-redux';
import { createPhoto, updatePhoto, receiveErrors } from '../../actions/photo_actions';
import PhotoForm from './photo_form';

const mapStateToProps = ({ session, photos }) => ({
  currentUser: session.currentUser,
  errors: photos.errors
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createPhoto: (photo) => dispatch(createPhoto(photo)),
  updatePhoto: (photo) => dispatch(updatePhoto(photo)),
  receiveErrors: (err) => dispatch(receiveErrors(err)),
  closeModal: () => ownProps.closeModal()
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoForm);
