import { connect } from "react-redux";
import catActions from "store/cat/actions";
import appActions from "store/app/actions";
import Container from "./container";

const mapStateToProps = state => ({
  cats: state.cat.cats,
  cat: state.cat.cats[0],
  favCats: state.cat.favCats,
  page: state.cat.page,
  isFetching: state.cat.isFetching,
  hasMoreCats: true,
  currentRoute: state.app.currentRoute,
  layout: state.app.layout
});

const mapDispatchToProps = dispatch => ({
  fetchCats: (page, searchOption) =>
    dispatch(catActions.fetchCats(page, searchOption)),
  fetchFavCats: (page, searchOption) =>
    dispatch(catActions.fetchFavCats(page, searchOption)),
  setCurrentRoute: route => dispatch(appActions.setCurrentRoute(route))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
