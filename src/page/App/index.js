import { connect } from "react-redux";
import actions from "store/cat/actions";
import Container from "./container";

const mapStateToProps = state => ({
  cats: state.cat.cats,
  page: state.cat.page,
  isFetching: state.cat.isFetching
});

const mapDispatchToProps = dispatch => ({
  fetchCats: (page, searchOption) =>
    dispatch(actions.fetchCats(page, searchOption))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
