import { connect } from 'react-redux';
import { fetchAlbum, updateAlbum, deleteAlbum, receiveAlbumErrors } from '../../actions/album_actions';
import { selectAlbum } from '../../reducers/selectors';

import AlbumShow from './album_show';

const mapStateToProps = (state, { match }) => {
  const albumId = parseInt(match.params.albumId);
  const album = selectAlbum(state, match.params.albumId);
  return {
    currentUser: state.session.currentUser,
    albumId,
    album
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAlbum: (albumId) => dispatch(fetchAlbum(albumId)),
  updateAlbum: album => dispatch(updateAlbum(album)),
  deleteAlbum: album => dispatch(deleteAlbum(album)),
  receiveAlbumErrors: err => dispatch(receiveAlbumErrors(err))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumShow);
