import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import News from './component';
import { getNewsFromAPI } from '../../reducers/news/actions';

const mapStateToProps = (state) => ({
  userName: state.userReducer.user.name,
  data: state.newsReducer.news || null,
});

const mapDispatchToProps = (dispatch) => ({
  getAllNews: bindActionCreators(getNewsFromAPI, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(News);
