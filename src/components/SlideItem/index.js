import { connect } from "react-redux";
import actions from "store/cat/actions";
import container from "./container";

const mapStateToProps = state => ({
  cats: state.cat.cats,
  favCats: state.cat.favCats,
  currentRoute: state.app.currentRoute
});

const mapDispatchToProps = dispatch => ({
  favoriteImage: imgId => dispatch(actions.favoriteImage(imgId)),
  deleteImage: imgId => dispatch(actions.deleteImage(imgId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(container);
