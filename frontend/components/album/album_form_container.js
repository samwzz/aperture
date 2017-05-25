import { connect } from 'react-redux';
import { createAlbum, updateAlbum, receiveAlbumErrors } from '../../actions/album_actions';
import AlbumForm from './album_form';

const mapStateToProps = ({ session, albums }) => ({
  currentUser: session.currentUser,
  errors: albums.errors
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createAlbum: (album) => dispatch(createAlbum({ album })),
  updateAlbum: (album, id) => dispatch(updateAlbum({ album }, id)),
  receiveAlbumErrors: (err) => dispatch(receiveAlbumErrors(err)),
  closeModal: () => ownProps.closeModal()
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumForm);
