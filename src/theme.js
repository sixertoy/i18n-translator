// const blue = '#2980B9';
// const gray = '#DDDDDD';
// color: '#A0A0A0',

// const black = '#394048';
// const gray = '#A0A0A0';

// OK
// const velvet = '#661E75';

// const white = '#F2F2F2';
// const blue = '#295772';
// const dark = '#053158';
// const grey = '#D9E3F2';
// const red = '#F06F55';

// const blue = '#0F133F';
// const dark = '#1C223F';
// const indigo = '#1C223F';
// const grey = '#454959';
// const white = '#F2E4BD';
// const body = '#D9C6B1';

const options = '#0D0D0D';
const header = '#595959';
const red = '#DA402B';
const white = '#FFFFFF';

const font = '#8C8C8C';
const background = '#F2F2F2';
const line = '#FFFFFF';
const active = '#F0812F';

const themes = {
  // highlight: '#2C313C',
  // scrollbar: '#4B5362',
  // shadow: '#3B4048',
  bali: {
    header: 'rgba(229, 53, 111, 1)',
    options:
      'linear-gradient(119deg, rgba(30,16,60,1) 24%, rgba(229,53,111,1) 100%)',
    red: '#DA402B',
    white: '#FFFFFF',
  },
  day: {
    active: '#F0812F',
    background: '#F2F2F2',
    font: '#8C8C8C',
    header: '#595959',

    line: '#FFFFFF',
    options: '#0D0D0D',
    options: '#0D0D0D',
    red: '#DA402B',
    red: '#DA402B',
    white: '#FFFFFF',
    white: '#FFFFFF',
    // active: '#6494ED',
    // background: white,
    // border: '#E4E6E8',
    // button: '#FFFFFF',
    // color: '#202124',
    // danger: '#DA402B',
    // disabled: '#5F6368',
    // foreground: '#F5F5F5',
    // popup: '#E4E6E8',
  },
};

const themeBase = {
  colors: {
    active,
    background,
    font,
    header,
    line,
    options,
    red,
    white,
  },
  sizes: {
    colgutter: 12,
    colwidth: 300,
    footerMargin: 40,
    header: 40,
    logo: 28,
    options: 112,
  },
};

export const getAllThemes = () => themes;

export const getThemeByThemeId = id => {
  const selectedTheme = themes[id];
  const colors = { ...themeBase.colors, ...selectedTheme };
  return { colors, ...themeBase, themeid: id };
};
