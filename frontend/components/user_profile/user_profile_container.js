import { connect } from 'react-redux';
import { fetchUserPhotos, fetchAlbumPhotos } from '../../actions/photo_actions';
import { selectPhotos } from '../../reducers/selectors';

import UserProfile from './user_profile';

const mapStateToProps = state => ({
  photos: selectPhotos(state),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchUserPhotos: (userId) => dispatch(fetchUserPhotos(userId)),
  fetchAlbumPhotos: (albumId) => dispatch(fetchAlbumPhotos(albumId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
