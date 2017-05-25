import { connect } from 'react-redux';
import { fetchPhotos } from '../../actions/photo_actions';
import { selectPhotos } from '../../reducers/selectors';

import Discover from './discover';

const mapStateToProps = state => ({
  photos: selectPhotos(state)
});

const mapDispatchToProps = dispatch => ({
  fetchPhotos: () => dispatch(fetchPhotos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Discover);
