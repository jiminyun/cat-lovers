import { actionTypes } from "./actions";

const getInitialState = () => ({
  cats: [],
  page: 0,
  isFetching: false,
  error: "",
  favCats: []
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
        cats: [...state.cats, ...payload.cats],
        page: state.page + 1,
        isFetching: false
      };
    case actionTypes.FETCH_LIKE_SUCCESS:
      return {
        ...state,
        favCats: [...payload.cats]
      };
    default:
      return { ...state };
  }
};

export default story;
