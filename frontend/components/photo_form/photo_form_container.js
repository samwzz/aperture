import { connect } from 'react-redux';
import { createPhoto, receiveErrors } from '../../actions/photo_actions';
import PhotoForm from './photo_form';

const mapStateToProps = ({ photos }) => ({
  errors: photos.errors
});

const mapDispatchToProps = (dispatch) => ({
  createPhoto: (photo) => dispatch(createPhoto(photo)),
  receiveErrors: (err) => dispatch(receiveErrors(err))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoForm);
