import { connect } from 'react-redux';
import { fetchPhotos, fetchUserPhotos } from '../../actions/photo_actions';
import { selectPhotos } from '../../reducers/selectors';

import PhotoIndex from './photo_index';

const mapDispatchToProps = dispatch => ({
  fetchPhotos: () => dispatch(fetchPhotos()),
  fetchUserPhotos: (userId) => dispatch(fetchUserPhotos(userId))
});

export default connect(
  null,
  mapDispatchToProps
)(PhotoIndex);