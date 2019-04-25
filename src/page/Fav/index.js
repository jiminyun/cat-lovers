import { connect } from "react-redux";
import catActions from "store/cat/actions";
import appActions from "store/app/actions";
import Container from "./container";

const mapStateToProps = state => ({
  favCats: state.cat.favCats,
  isFetching: state.cat.isFetching,
  hasMoreCats: true
});

const mapDispatchToProps = dispatch => ({
  fetchFavCats: (page, searchOption) =>
    dispatch(catActions.fetchFavCats(page, searchOption)),
  setCurrentRoute: route => dispatch(appActions.setCurrentRoute(route))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
