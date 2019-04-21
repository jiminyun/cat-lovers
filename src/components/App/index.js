import { connect } from "react-redux";
import actions from "store/cats/actions";
import Container from "./container";

const mapStateToProps = state => ({
  cats: state.cat.cats,
  page: state.cat.page,
  isFetching: state.cat.isFetching
});

const mapDispatchToProps = dispatch => ({
  fetchCats: () => dispatch(actions.fetchCats())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
