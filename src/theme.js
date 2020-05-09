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
const gray = '#DDDDDD';
const white = '#FFFFFF';
const background = '#F1F1F1';

const colors = {
  background,
  blue,
  font,
  gray,
  header,
  options,
  orange,
  velvet,
  white,
};

const themes = {
  bali: {
    active: '#E5356F',
    background: '#F1F1F1',
    even: '#F7F7F7',
    font: '#8C8C8C',
    header: 'linear-gradient(119deg, #1E103C 24%, #E5356F 100%)',
    love: '#DA402B',
    odd: '#FFFFFF',
    options: '#0D0D0D',
    red: '#E5356F',
    triangle: '#FFFFFF',
    valid: '#ACE539',
  },
  day: {
    active: '#DA402B',
    background: '#F1F1F1',
    even: '#F7F7F7',
    font: '#8C8C8C',
    header: '#595959',
    love: '#DA402B',
    odd: '#FFFFFF',
    options: '#0D0D0D',
    red: '#E5356F',
    triangle: '#DA402B',
    valid: '#ACE539',
  },
};

const themeBase = {
  colors,
  depths: {
    colheader: 999,
    progressbar: 999,
  },
  sizes: {
    bottom: 80,
    colgutter: 12,
    colheader: 52,
    colkey: 220,
    colwidth: 300,
    footer: 40,
    form: 350,
    header: 50,
    line: 60,
    logo: 28,
    options: 112,
  },
};

export const getAllThemes = () => themes;

export const getThemeByThemeId = id => {
  const selectedTheme = themes[id];
  return { ...themeBase, ...selectedTheme, themeid: id };
};
