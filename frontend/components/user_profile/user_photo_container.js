import { connect } from 'react-redux';
import { fetchUserPhotos } from '../../actions/photo_actions';
import { selectPhotos } from '../../reducers/selectors';

import UserPhoto from './user_photo';

const mapStateToProps = state => ({
  photos: selectPhotos(state)
});

const mapDispatchToProps = dispatch => ({
  fetchUserPhotos: (userId) => dispatch(fetchUserPhotos(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPhoto);
