import { bindActionCreators } from 'redux';
import { connectUser } from '../../reducers/userActions';
import { connect } from 'react-redux';
import Login from './component';

const mapStateToProps = (state) => ({
  name: state.userReducer.user.name,
});

const mapDispatchToProps = (dispatch) => ({
  connectUser: bindActionCreators(connectUser, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
