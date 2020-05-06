import React from 'react';
import { AiOutlineArrowRight as RightArrow } from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';

const useStyles = createUseStyles({
  button: {
    background: '#FFFFFF',
    borderRadius: 30,
    composes: ['text-center'],
    fontSize: 30,
    height: 60,
    letterSpacing: '0.08em',
    width: 60,
  },
  home: ({ theme }) => ({
    background: theme.header,
    composes: [
      'text-center',
      'flex-columns',
      'flex-center',
      'items-center',
      'is-full-layout',
    ],
  }),
});

const StartViewComponent = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.home}>
      {/* <h6>
        <span>Create your first project</span>
      </h6> */}
      <Link className={classes.button} to="/create">
        <RightArrow />
      </Link>
    </div>
  );
};

export default StartViewComponent;
