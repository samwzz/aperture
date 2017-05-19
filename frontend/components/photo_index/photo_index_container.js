import { connect } from 'react-redux';
import { fetchPhotos } from '../../actions/photo_actions';
import { selectPhotos } from '../../reducers/selectors';

import PhotoIndex from './photo_index';

const mapStateToProps = state => ({
  photos: selectPhotos(state)
});

const mapDispatchToProps = dispatch => ({
  fetchPhotos: () => dispatch(fetchPhotos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoIndex);
