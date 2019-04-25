import { connect } from "react-redux";
import actions from "store/app/actions";
import Navigation from "./navi";

const mapStateToProps = state => ({
  layout: state.app.layout,
  theme: state.app.theme,
  currentRoute: state.app.currentRoute
});

const mapDispatchToProps = dispatch => ({
  setTheme: theme => dispatch(actions.setTheme({ theme })),
  setLayout: layout => dispatch(actions.setLayout({ layout }))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);
