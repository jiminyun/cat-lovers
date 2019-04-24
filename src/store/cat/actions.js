import catLoverApi from "services/catLoverApi";

const NS = "@cat-lover/cats";

//action type
export const actionTypes = {
  FETCH_CATS_REQUEST: `${NS}/FETCH_CATS_REQUEST`,
  FETCH_CATS_SUCCESS: `${NS}/FETCH_CATS_SUCCESS`,
  FETCH_CATS_FAILURE: `${NS}/FETCH_CATS_FAILURE`,

  FETCH_FAV_CATS_REQUEST: `${NS}/FETCH_FAV_CATS_REQUEST`,
  FETCH_FAV_CATS_SUCCESS: `${NS}/FETCH_FAV_CATS_SUCCESS`,
  FETCH_FAV_CATS_FAILURE: `${NS}/FETCH_FAV_CATS_FAILURE`,

  FETCH_LIKE_SUCCESS: `${NS}/FETCH_LIKE_SUCCESS`,
  FETCH_LIKE_FAILURE: `${NS}/FETCH_LIKE_FAILURE`,

  FETCH_UNLIKE_SUCCESS: `${NS}/FETCH_UNLIKE_FAILURE`,
  FETCH_UNLIKE_FAILURE: `${NS}/FETCH_UNLIKE_FAILURE`
};

//action creator
const action = (type, payload) => ({ type, payload });

//api - thunk funcs
const actions = {
  fetchCats: (page = {}, searchOption = {}) => {
    return dispatch => {
      //const { page, searchOption } = payload;
      //console.log("searchOption", searchOption);
      dispatch(action(actionTypes.FETCH_CATS_REQUEST, page));
      catLoverApi
        .getCatsByPage(page)
        .then(cats =>
          dispatch(action(actionTypes.FETCH_CATS_SUCCESS, { cats }))
        )
        .catch(err => dispatch(action(actionTypes.FETCH_CATS_FAILURE, err)));
    };
  },
  fetchFavCats: (page = {}, searchOption = {}) => {
    return dispatch => {
      dispatch(action(actionTypes.FETCH_FAV_CATS_REQUEST, page));
      catLoverApi
        .getFavorites(page)
        .then(favCats =>
          dispatch(action(actionTypes.FETCH_FAV_CATS_SUCCESS, { favCats }))
        )
        .catch(err =>
          dispatch(action(actionTypes.FETCH_FAV_CATS_FAILURE, err))
        );
    };
  },
  favoriteImage: imageId => {
    return dispatch => {
      catLoverApi
        .favoriteImage(imageId)
        .then(() => catLoverApi.getFavorites())
        .then(cats =>
          dispatch(action(actionTypes.FETCH_LIKE_SUCCESS, { cats }))
        )
        .catch(err => dispatch(action(actionTypes.FETCH_LIKE_FAILURE, err)));
    };
  },
  deleteImage: imageId => {
    return dispatch => {
      catLoverApi
        .deleteImage(imageId)
        .then(() => catLoverApi.getFavorites())
        .then(() => dispatch(action(actionTypes.FETCH_UNLIKE_SUCCESS)))
        .catch(err => dispatch(action(actionTypes.FETCH_UNLIKE_FAILURE, err)));
    };
  }
};

export default actions;
