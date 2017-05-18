import { connect } from 'react-redux';
import { signup, login, logout, receiveErrors } from '../../actions/session_actions';
import Navbar from './navbar';

const mapStateToProps = ({ session }) => ({
  currentUser: session.currentUser,
  loggedIn: Boolean(session.currentUser)
});

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
  receiveErrors: (err) => dispatch(receiveErrors(err))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navbar);
