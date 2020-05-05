// const blue = '#2980B9';
// const gray = '#DDDDDD';
// color: '#A0A0A0',

// const black = '#394048';
// const gray = '#A0A0A0';

// OK
// const velvet = '#661E75';
const red = '#DD4739';
const white = '#FAFAFA';
// const blue = '#0F133F';
// const dark = '#1C223F';
// const indigo = '#1C223F';
// const grey = '#454959';
// const white = '#F2E4BD';
// const body = '#D9C6B1';

const themes = {
  // highlight: '#2C313C',
  // scrollbar: '#4B5362',
  // shadow: '#3B4048',
  day: {
    // active: '#6494ED',
    background: white,
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
    // black,
    // blue,
    // body,
    // dark,
    // gray,
    // grey,
    // indigo,
    red,
    white,
    // velvet,
    // white,
  },
  sizes: {
    colgutter: 12,
    colwidth: 300,
    header: 40,
    options: 80,
  },
};

export const getAllThemes = () => themes;

export const getThemeByThemeId = id => {
  const selectedTheme = themes[id];
  const colors = { ...themeBase.colors, ...selectedTheme };
  return { colors, ...themeBase, themeid: id };
};
