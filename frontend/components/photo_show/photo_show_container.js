import { connect } from 'react-redux';
import { fetchPhoto } from '../../actions/photo_actions';
import { selectPhoto } from '../../reducers/selectors';

import PhotoShow from './photo_show';

const mapStateToProps = (state, { match }) => {

};

const mapDispatchToProps = (dispatch) => ({
  fetchPhoto: id => dispatch(fetchPhoto(id))
});

export default connect(
  null,
  mapDispatchToProps
)(PhotoShow);
