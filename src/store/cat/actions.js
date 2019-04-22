import catLoverApi from "services/catLoverApi";

const NS = "@cat-lover/cats";

//action type
export const actionTypes = {
  FETCH_CATS_REQUEST: `${NS}/FETCH_CATS_REQUEST`,
  FETCH_CATS_SUCCESS: `${NS}/FETCH_CATS_SUCCESS`,
  FETCH_CATS_FAILURE: `${NS}/FETCH_CATS_FAILURE`
};

//action creator
const action = (type, payload) => ({ type, payload });

//api - thunk funcs
const actions = {
  fetchCats: (page = {}, searchOption = {}) => {
    return dispatch => {
      //const { page, searchOption } = payload;
      console.log("searchOption", searchOption);

      dispatch(action(actionTypes.FETCH_CATS_REQUEST, page));

      return catLoverApi
        .getCatsByPage(page)
        .then(cats =>
          dispatch(action(actionTypes.FETCH_CATS_SUCCESS, { cats }))
        )
        .catch(err => dispatch(action(actionTypes.FETCH_CATS_FAILURE, err)));
    };
  }
};

export default actions;
