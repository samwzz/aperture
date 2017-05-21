import { connect } from 'react-redux';
import { signup, login, logout, receiveErrors } from '../../actions/session_actions';
import Home from './home';

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
)(Home);
