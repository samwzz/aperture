import { connect } from 'react-redux';
import { login, receiveErrors } from '../../actions/session_actions';
import LoginForm from './login_form';

const mapStateToProps = ({ session }) => ({
  errors: session.errors
});

const mapDispatchToProps = (dispatch) => ({
  login: (user) => dispatch(login({ user })),
  receiveErrors: (err) => dispatch(receiveErrors(err))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
