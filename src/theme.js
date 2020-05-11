// https://www.eggradients.com/linear-gradients?2dd4a736_page=3
// https://cssgradient.io
// https://color.adobe.com/fr/trends
import get from 'lodash.get';
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

// const blue = '#2980B9';
// const velvet = '#661E75';
// const orange = '#F0812F';
// const options = '#0D0D0D';
// const header = '#595959';
// const font = '#8C8C8C';
// const gray = '#DDDDDD';
// const white = '#FFFFFF';
// const background = '#F1F1F1';

// const gradients = {
//   fullsunset:
//     'linear-gradient(60deg, #1E103C 0%, #5C095A 37%, #F53844 78%, #FFCB6A 100%)',
//   sunset: 'linear-gradient(60deg, #1E103C 26%, #F53844 100%)',
// };

// background: ,
// const head = {
//   active: '#FFFFFF',
//   background: gradients.fullsunset,
//   button: '#000000',
//   color: '#561A8B',
// };

// const home = {
//   background: gradients.fullsunset,
// };

const radius = {
  big: 16,
  large: 12,
  normal: 8,
  small: 4,
};

const depths = {
  colheader: 999,
  progressbar: 999,
};

const sizes = {
  bottom: 80,
  buttonSize: 32,
  colgutter: 12,
  colheader: 52,
  colkey: 220,
  colwidth: 300,
  editor: 800,
  footer: 40,
  header: 64,
  line: 60,
  loginwidth: 250,
  logo: 28,
  options: 112,
  stepbutton: 290,
  stepinput: 350,
  stepswidth: 680,
};

const colors = {
  black: '#000000',
  grey: '#8C8C8C',
  white: '#FFFFFF',
  // background,
  // blue,
  // font,
  // gray,
  // head,
  // header,
  // home,
  // options,
  // orange,
  // velvet,
  // white,
};

const themes = {
  bali: {
    black: '#000000',
    grey: '#8C8C8C',
    white: '#FFFFFF',
    // active: '#E5356F',
    // background: '#F1F1F1',
    // even: '#F7F7F7',
    // font: '#8C8C8C',
    // header: gradients.fullsunset,
    // love: '#DA402B',
    // odd: '#FFFFFF',
    // options: '#0D0D0D',
    // red: '#E5356F',
    // triangle: '#FFFFFF',
    // valid: '#ACE539',
  },
  day: {
    // active: '#DA402B',
    // background: '#F1F1F1',
    // even: '#F7F7F7',
    // font: '#8C8C8C',
    // header: '#595959',
    // love: '#DA402B',
    // odd: '#FFFFFF',
    // options: '#0D0D0D',
    // red: '#E5356F',
    // triangle: '#DA402B',
    // valid: '#ACE539',
  },
  light: {},
};

const base = { colors, depths, radius, sizes };

export const getAllThemes = () => themes;

export const getThemeByThemeId = id => {
  const selectedTheme = get(themes, id, {});
  return { ...base, ...selectedTheme, themeid: id };
};
