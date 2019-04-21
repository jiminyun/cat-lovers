import { combineReducers } from "redux";
import app from "./app/reducer";
import cat from "./cat/reducer";
const rootReducer = combineReducers({
  app,
  cat
});

export default rootReducer;
