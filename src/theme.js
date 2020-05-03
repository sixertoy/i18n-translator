// const blue = '#2980B9';
// const black = '#282C34';
// const gray = '#DDDDDD';
const white = '#FFFFFF';
const dark = '#21252B';
const grey = '#EEEEEE';
const red = '#DD4739';
const body = '#34495E';
const gray = '#B9B9B9';
const velvet = '#661E75';

const themes = {
  day: {
    active: '#6494ED',
    background: '#FEFEFE',
    border: '#E4E6E8',
    button: '#FFFFFF',
    color: '#202124',
    danger: '#DA402B',
    disabled: '#5F6368',
    foreground: '#F5F5F5',
    popup: '#E4E6E8',
  },
  night: {
    active: '#6494ED',
    background: '#282C34',
    border: '#181A1F',
    button: '#181A1F',
    color: '#D7DAE0',
    danger: '#E06C75',
    disabled: '#6B727C',
    foreground: '#21252B',
    popup: '#2F3237',
  },
};

const themeBase = {
  colors: {
    body,
    dark,
    gray,
    grey,
    highlight: '#2C313C',
    red,
    scrollbar: '#4B5362',
    shadow: '#3B4048',
    velvet,
    white,
  },
  sizes: {
    colgutter: 12,
    colwidth: 300,
  },
};

export const getAllThemes = () => themes;

export const getThemeByThemeId = id => {
  const selectedTheme = themes[id];
  const colors = { ...themeBase.colors, ...selectedTheme };
  return { colors, ...themeBase, themeid: id };
};
