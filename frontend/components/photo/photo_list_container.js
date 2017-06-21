import { connect } from 'react-redux';
import { fetchPhotos, fetchUserPhotos } from '../../actions/photo_actions';
import { selectPhotos } from '../../reducers/selectors';

import PhotoList from './photo_list';

const mapStateToProps = state => ({
  photos: selectPhotos(state),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchPhotos: (offset) => dispatch(fetchPhotos(offset)),
  fetchUserPhotos: (userId) => dispatch(fetchUserPhotos(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoList);
