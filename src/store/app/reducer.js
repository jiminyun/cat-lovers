import { actionTypes } from "./actions";

const getInitialState = () => ({
  theme: "light",
  currentRoute: "home",
  layout: "grid"
});

const app = (state = getInitialState(), { type, payload }) => {
  //console.log("payload: ", payload);

  switch (type) {
    case actionTypes.SET_THEME:
    case actionTypes.SET_LAYOUT:
      return {
        ...state,
        ...payload
      };
    case actionTypes.SET_CURRENT_ROUTE:
      return {
        ...state,
        currentRoute: payload
      };
    default:
      return state;
  }
};

export default app;
