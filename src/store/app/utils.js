export const layouts = {
  grid: "grid",
  gallery: "slide"
};

export const themes = {
  dark: "dark",
  light: "light"
};

export const routes = {
  home: "home",
  favorite: "favorite"
};

export const AppReducerData = {
  initialState: {
    theme: themes.dark,
    layout: layouts.list
  },
  payload: { theme: themes.light }
};
