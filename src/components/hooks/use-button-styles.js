import { createUseStyles } from 'react-jss';

export const useButtonStyles = createUseStyles({
  btn: ({ theme }) => ({
    '&:disabled': { cursor: 'not-allowed', opacity: 0.45 },
    '&:hover': { background: theme.colors.danger },
    background: theme.colors.black,
    borderRadius: theme.radius.small,
    color: theme.colors.white,
    composes: ['is-block', 'fs18', 'py12', 'px24', 'use-pointer'],
    transition:
      'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
    width: 250,
  }),
  lnk: ({ theme }) => ({
    '&:disabled': { cursor: 'not-allowed', opacity: 0.45 },
    '&:hover': { textDecoration: 'underline !important' },
    background: theme.colors.transparent,
    borderRadius: 0,
    color: theme.colors.white,
    composes: ['is-block', 'fs18', 'py12', 'px24', 'use-pointer'],
    transition:
      'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
    width: 250,
  }),
});

export default useButtonStyles;
