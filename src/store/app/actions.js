const NS = "@catLover/app";

export const actionTypes = {
  SET_THEME: `${NS}/SET_THEME`,
  SET_LAYOUT: `${NS}/SET_LAYOUT`,
  SET_CURRENT_ROUTE: `${NS}/SET_CURRENT_ROUTE`
};

const actions = {
  setTheme: (payload = {}) => ({ type: actionTypes.SET_THEME, payload }),
  setLayout: (payload = {}) => ({ type: actionTypes.SET_LAYOUT, payload }),
  setCurrentRoute: (payload = {}) => ({
    type: actionTypes.SET_CURRENT_ROUTE,
    payload
  })
};

export default actions;
