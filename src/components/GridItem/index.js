import { connect } from "react-redux";
import actions from "store/cat/actions";
import GridItem from "./gridItem";

const mapStateToProps = state => ({
  cats: state.cat.cats,
  favCats: state.cat.favCats
});

const mapDispatchToProps = dispatch => ({
  favoriteImage: imgId => dispatch(actions.favoriteImage(imgId)),
  deleteImage: imgId => dispatch(actions.deleteImage(imgId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GridItem);
