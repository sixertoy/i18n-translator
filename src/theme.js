// const blue = '#2980B9';
// const gray = '#DDDDDD';
// color: '#A0A0A0',

const black = '#394048';
const white = '#FFFFFF';
const dark = '#21252B';
const grey = '#EEEEEE';
const body = '#34495E';
const gray = '#A0A0A0';
const velvet = '#661E75';
const blue = '#5DAFD6';
const indigo = '#4889b9';

// OK
const red = '#DD4739';

const themes = {
  // highlight: '#2C313C',
  // scrollbar: '#4B5362',
  // shadow: '#3B4048',
  day: {
    // active: '#6494ED',
    // background: '#FEFEFE',
    // border: '#E4E6E8',
    // button: '#FFFFFF',
    // color: '#202124',
    // danger: '#DA402B',
    // disabled: '#5F6368',
    // foreground: '#F5F5F5',
    // popup: '#E4E6E8',
  },
  night: {
    // active: '#6494ED',
    // background: '#282C34',
    // border: '#181A1F',
    // button: '#181A1F',
    // color: '#D7DAE0',
    // danger: '#E06C75',
    // disabled: '#6B727C',
    // foreground: '#21252B',
    // popup: '#2F3237',
  },
};

const themeBase = {
  colors: {
    black,
    blue,
    body,
    dark,
    gray,
    grey,
    indigo,
    red,
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
