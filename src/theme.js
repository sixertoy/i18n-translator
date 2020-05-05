// color: '#A0A0A0',
// const gray = '#DDDDDD';
// const gray = '#A0A0A0';
// const black = '#394048';
// const white = '#F2F2F2';
// const grey = '#D9E3F2';
// active: '#6494ED',
// const velvet = '#661E75';
// const blue = '#295772';
// const dark = '#053158';
// const blue = '#0F133F';
// const dark = '#1C223F';
// const indigo = '#1C223F';
// const grey = '#454959';
// const white = '#F2E4BD';
// const body = '#D9C6B1';
// const red = '#F06F55';
// const white = '#FFFFFF';

const blue = '#2980B9';
const velvet = '#661E75';
const orange = '#F0812F';
const options = '#0D0D0D';
const header = '#595959';
const font = '#8C8C8C';
const odd = '#FFFFFF';
const white = '#FFFFFF';
const even = '#F7F7F7';
const red = '#DA402B';
const background = '#F1F1F1';

const colors = {
  background,
  blue,
  even,
  font,
  header,
  odd,
  options,
  orange,
  red,
  velvet,
  white,
};

const themes = {
  bali: {
    header: 'linear-gradient(119deg, #1E103C 24%, #E5356F 100%)',
  },
  day: {
    font: '#8C8C8C',
    header: '#595959',
    options: '#0D0D0D',
    triangle: '#DA402B',
  },
};

const themeBase = {
  colors,
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
  return { ...themeBase, ...selectedTheme, themeid: id };
};
