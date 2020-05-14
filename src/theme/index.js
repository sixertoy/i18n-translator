import get from 'lodash.get';
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
// #E5356F
// #5C095A
// #661E75
// #661E75
// #561A8B
// #1E103C

// const gradients = {
//   fullsunset:
//     'linear-gradient(60deg, #1E103C 0%, #5C095A 37%, #F53844 78%, #FFCB6A 100%)',
//   sunset: 'linear-gradient(60deg, #1E103C 26%, #F53844 100%)',
// };

const red = '#CD0000';
const black = '#000000';
const white = '#FFFFFF';

const colors = {
  black,
  danger: '#F53844',
  darker: '#0D0D0D',
  green: '#72AE72',
  grey: '#8C8C8C',
  lighter: '#F1F1F1',
  red,
  warning: '#F0812F',
  white,
};

const radius = {
  big: 16,
  large: 12,
  normal: 8,
  small: 4,
};

const sizes = {
  colheader: 52,
  header: 64,
};

const themeBase = {
  app: {
    color: black,
    container: black,
    layer: white,
  },
  button: {
    disabled: { background: '', color: '' },
    hover: { background: '', color: '' },
    idle: { background: '', color: '' },
  },
  percentage: {
    track: '',
    tumb: '',
  },
  table: {
    even: '#F7F7F7',
    font: black,
    odd: white,
  },
};

const themes = {
  bali: {},
  bw: {},
  day: {},
  light: {},
};

export const getThemes = () => Object.keys(themes);

export const getThemeByKey = key => {
  const selectedTheme = get(themes, key, {});
  const withBase = { ...themeBase, ...selectedTheme };
  return { colors, key, radius, ...withBase, sizes };
};
