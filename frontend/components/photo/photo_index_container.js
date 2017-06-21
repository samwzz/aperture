import { connect } from 'react-redux';
import { fetchAllPhotos, fetchUserPhotos, fetchAlbumPhotos } from '../../actions/photo_actions';
import { selectPhotos } from '../../reducers/selectors';

import PhotoIndex from './photo_index';

const mapStateToProps = state => ({
  photos: selectPhotos(state)
});

const mapDispatchToProps = dispatch => ({
  fetchAllPhotos: () => dispatch(fetchAllPhotos()),
  fetchUserPhotos: (userId) => dispatch(fetchUserPhotos(userId)),
  fetchAlbumPhotos: (albumId) => dispatch(fetchAlbumPhotos(albumId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoIndex);
