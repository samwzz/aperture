import { connect } from 'react-redux';
import { createTag } from '../../actions/tag_actions';
import TagForm from './tag_form';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  createTag: (tag) => dispatch(createTag({ tag }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TagForm);
