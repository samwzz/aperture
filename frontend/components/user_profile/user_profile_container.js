import { connect } from 'react-redux';
import { fetchPhotos, fetchUserPhotos } from '../../actions/photo_actions';
import { selectPhotos } from '../../reducers/selectors';

import UserProfile from './user_profile';

const mapStateToProps = state => ({
  photos: selectPhotos(state),
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchPhotos: () => dispatch(fetchPhotos()),
  fetchUserPhotos: (userId) => dispatch(fetchUserPhotos(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfile);
