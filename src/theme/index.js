import { rgba } from '../core/utils';
// import get from 'lodash.get';
// https://www.eggradients.com/linear-gradients?2dd4a736_page=3
// https://cssgradient.io
// https://color.adobe.com/fr/trends
// #000000
// #0D0D0D
// #0D0D0D
// #394048
// #454959
// #595959
// #8C8C8C
// #A0A0A0
// #DDDDDD
// #F7F7F7
// #F1F1F1
// #F2F2F2
// #FFFFFF
// #D9E3F2
// #0F133F
// #1C223F
// #053158
// #6494ED
// #295772
// #2980B9
// #00AE9F
// #398F68
// #72AE72
// #ACE539
// #D9C6B1
// #F2E4BD
// #FFCB6A
// #F0812F
// #F06F55
// #A05154
// #CD0000
// #DA402B
// #F01B9F
// #E5356F
// #5C095A
// #661E75
// #48118A
// #561A8B
// #1E103C
// #0F043F

// -> Default Theme
const red = '#CD0000';
const odd = rgba('#FFFFFF', 0.45);
const even = rgba('#000000', 0.01);
const danger = '#F53844';
const warning = '#F0812F';
const background = '#FAFBFC';

const pink = '#EE256B';
const orange = '#FD7822';
const gradient = `linear-gradient(0deg, ${pink} 0%, ${orange} 100%)`;

const colors = {
  background,
  danger,
  even,
  gradient,
  odd,
  red,
  warning,
};

const sizes = {
  colheader: 52,
  header: 64,
};

const themes = {
  bali: {},
  bw: {},
  day: {},
  light: {},
};

export const getThemes = () => Object.keys(themes);

export const getThemeByKey = key => {
  // const selectedTheme = get(themes, key, {});
  return { colors, key, sizes };
};
