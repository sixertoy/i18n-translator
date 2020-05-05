// const blue = '#2980B9';
// const gray = '#DDDDDD';
// color: '#A0A0A0',
// const black = '#394048';
// const gray = '#A0A0A0';
// const velvet = '#661E75';
// active: '#6494ED',
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
// const white = '#FFFFFF';
// const active = '#F0812F';

const options = '#0D0D0D';
const header = '#595959';
const font = '#8C8C8C';
const odd = '#FFFFFF';
const even = '#F7F7F7';
const red = '#DA402B';
const background = '#F1F1F1';
// 'linear-gradient(119deg, rgba(30,16,60,1) 24%, rgba(229,53,111,1) 100%)'

const themes = {
  bali: {},
  day: {},
};

const themeBase = {
  colors: {
    background,
    even,
    font,
    header,
    odd,
    options,
    red,
  },
  sizes: {
    colgutter: 12,
    colwidth: 300,
    keycol: 220,
    line: 52,
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
