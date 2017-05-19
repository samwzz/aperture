import { connect } from 'react-redux';
import { signup, login, receiveErrors } from '../../actions/session_actions';
import SignupForm from './signup_form';

const mapStateToProps = ({ session }) => ({
  errors: session.errors
});

const mapDispatchToProps = (dispatch) => ({
  signup: (user) => dispatch(signup({ user })),
  login: (user) => dispatch(login({ user })),
  receiveErrors: (err) => dispatch(receiveErrors(err))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignupForm);
