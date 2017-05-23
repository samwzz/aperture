import { connect } from 'react-redux';
import { fetchUserAlbums } from '../../actions/album_actions';
import { selectAlbums } from '../../reducers/selectors';

import AlbumIndex from './album_index';

const mapStateToProps = state => ({
  albums: selectAlbums(state),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchUserAlbums: (userId) => dispatch(fetchUserAlbums(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumIndex);
