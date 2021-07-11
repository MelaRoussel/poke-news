import { connect } from 'react-redux';
import Home from './component';

const mapStateToProps = (state) => ({
  userName: state.userReducer.user.name,
});

export default connect(mapStateToProps)(Home);
