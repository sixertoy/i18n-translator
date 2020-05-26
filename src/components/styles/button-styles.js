import { createUseStyles } from 'react-jss';

export const useButtonStyles = createUseStyles({
  btn: {
    '&:disabled': { cursor: 'not-allowed', opacity: 0.45 },
    '&:hover': { background: '#EB7392' },
    background: '#000000',
    borderRadius: 3,
    color: '#000000',
    composes: ['is-block', 'fs18', 'py12', 'px24'],
    transition:
      'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
    width: 250,
  },
  lnk: {
    '&:disabled': { cursor: 'not-allowed', opacity: 0.45 },
    '&:hover': { textDecoration: 'underline !important' },
    background: 'transparent',
    borderRadius: 0,
    color: '#000000',
    composes: ['is-block', 'fs18', 'py12', 'px24'],
    transition:
      'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
    width: 250,
  },
});

export default useButtonStyles;
