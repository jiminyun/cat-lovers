import { connect } from "react-redux";
import app from "./app";

const mapStateToProps = state => ({
  theme: state.app.theme
});

export default connect(
  mapStateToProps,
  null
)(app);
