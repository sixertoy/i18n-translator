import React from 'react';
import { AiFillHome as HomeIcon } from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';

import { RESPONSIVE_BREAKPOINT } from '../../../constants';

const useStyles = createUseStyles({
  button: ({ theme }) => ({
    '& + &': { marginLeft: 4 },
    '& span': { marginLeft: 5, verticalAlign: 'middle' },
    '& svg': { fontSize: 20 },
    '&:hover': { background: 'hsla(0,0%,100%,.2)' },
    background: 'hsla(0,0%,100%,.3)',
    borderRadius: theme.radius.small,
    color: theme.colors.white,
    composes: ['is-block', 'fs16', 'is-bold', 'text-center', 'p7'],
    lineHeight: '1.25em',
    transition: 'background 0.5s',
    width: 'auto',
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

const ReactDumbComponent = React.memo(() => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <Link className={classes.button} to="/">
      <HomeIcon />
    </Link>
  );
});

ReactDumbComponent.defaultProps = {};

ReactDumbComponent.propTypes = {};

export default ReactDumbComponent;
