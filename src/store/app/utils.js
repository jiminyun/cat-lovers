export const layouts = {
  grid: "grid",
  gallery: "gallery"
};

export const themes = {
  dark: "dark",
  light: "light"
};

export const AppReducerData = {
  initialState: {
    theme: themes.dark,
    layout: layouts.list
  },
  payload: { theme: themes.light }
};
