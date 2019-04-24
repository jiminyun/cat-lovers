import { connect } from "react-redux";
import actions from "store/cat/actions";
import Container from "./container";

const mapStateToProps = state => ({
  cats: state.cat.cats,
  favCats: state.cat.favCats,
  page: state.cat.page,
  isFetching: state.cat.isFetching,
  hasMoreCats: true
});

const mapDispatchToProps = dispatch => ({
  fetchCats: (page, searchOption) =>
    dispatch(actions.fetchCats(page, searchOption)),
  fetchFavCats: (page, searchOption) =>
    dispatch(actions.fetchFavCats(page, searchOption))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
