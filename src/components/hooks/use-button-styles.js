import { createUseStyles } from 'react-jss';

export const useButtonStyles = createUseStyles({
  btn: ({ theme }) => ({
    '&:disabled': { cursor: 'not-allowed', opacity: 0.45 },
    '&:hover': { background: theme.colors.red },
    background: theme.colors.black,
    borderRadius: theme.radius.small,
    color: theme.colors.white,
    composes: ['is-block', 'fs18', 'py12', 'px24', 'use-pointer'],
    transition: 'background 0.5s, opacity 0.5s',
    width: 250,
  }),
});

export default useButtonStyles;
