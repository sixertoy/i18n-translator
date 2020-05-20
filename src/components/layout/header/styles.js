import { createUseStyles } from 'react-jss';

import { RESPONSIVE_BREAKPOINT } from '../../../constants';

const useButtonStyles = createUseStyles({
  button: ({ theme }) => ({
    '& span': { marginLeft: 5, verticalAlign: 'middle' },
    '& svg': { fontSize: 20 },
    '&:hover': { background: 'hsla(0,0%,100%,.2)' },
    background: 'hsla(0,0%,100%,.3)',
    color: theme.colors.white,
    composes: ['rnd3', 'is-block', 'fs16', 'is-bold', 'text-center', 'p7'],
    lineHeight: '1.25em',
    transition: 'background 0.5s',
  }),
  [`@media (max-width: ${RESPONSIVE_BREAKPOINT}px)`]: {
    button: {
      '& span': {
        display: 'none',
        margin: 0,
        visibility: 'hidden',
      },
    },
  },
});

export default useButtonStyles;
