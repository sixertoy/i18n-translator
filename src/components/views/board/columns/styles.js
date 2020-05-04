// import { rgba } from '../../../../core/utils/colors';

export const lineStyles = () => ({
  composes: ['is-block', 'p7', 'no-overflow', 'debug'],
  textOverflow: 'ellipsis',
  whiteSpace: 'nowrap',
});

export const inputStyles = () => ({
  composes: [
    'is-block',
    'px7',
    'debug',
    'py12',
    'no-overflow',
    'fs14',
    'no-wrap',
    'is-full-width',
  ],
  fontFamily: ['arial', 'verdana', 'sans-serif'],
  letterSpacing: '0.05rem',
  textOverflow: 'ellipsis',
  transition: 'background 0.5s',
});
