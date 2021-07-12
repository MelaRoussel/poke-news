import { bindActionCreators } from 'redux';
import { connectUser } from '../../reducers/user/actions';
import { connect } from 'react-redux';
import Login from './component';

const mapStateToProps = (state) => ({
  name: state.userReducer.user.name,
  isLoading: state.userReducer.loading,
  error: state.userReducer.error,
});

const mapDispatchToProps = (dispatch) => ({
  connectUser: bindActionCreators(connectUser, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
