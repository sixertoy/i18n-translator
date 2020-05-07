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
  container: ({ theme }) => ({
    background: theme.header,
    composes: [],
  }),
});

const StartViewComponent = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <div className={classes.container} id="home-view">
      {/* <h6>
        <span>Create your first project</span>
      </h6> */}
      <Link className={classes.button} to="/import">
        <RightArrow />
      </Link>
    </div>
  );
};

export default StartViewComponent;
