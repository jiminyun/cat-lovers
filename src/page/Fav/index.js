import { connect } from "react-redux";
import actions from "store/cat/actions";
import Container from "./container";

const mapStateToProps = state => ({
  favCats: state.cat.favCats,
  isFetching: state.cat.isFetching,
  hasMoreCats: true
});

const mapDispatchToProps = dispatch => ({
  fetchFavCats: (page, searchOption) =>
    dispatch(actions.fetchFavCats(page, searchOption))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
