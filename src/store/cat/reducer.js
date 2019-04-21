import { actionTypes } from "./actions";

const getInitialState = () => ({
  cats: [],
  page: 0,
  isFetching: false,
  error: ""
});

const story = (state = getInitialState(), { type, payload }) => {
  switch (type) {
    case actionTypes.FETCH_CATS_REQUEST:
      return {
        ...state,
        isFetching: true
      };
    case actionTypes.FETCH_CATS_SUCCESS:
      return {
        ...state,
        cats: [...payload.cats],
        page: state.page + 1,
        isFetching: false
      };
    default:
      return { ...state };
  }
};

export default story;
