import { connect } from "react-redux";
import actions from "store/cat/actions";
import GridItem from "./gridItem";

const mapStateToProps = state => ({
  layout: state.app.layout,
  theme: state.app.theme
});

const mapDispatchToProps = dispatch => ({
  favoriteImage: imgId => dispatch(actions.favoriteImage(imgId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(GridItem);
