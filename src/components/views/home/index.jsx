import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';

import Layout from '../../layout';

const useStyles = createUseStyles({
  button: {
    borderRadius: 4,
    composes: ['py20', 'px32', 'debug'],
    textAlign: 'center',
  },
  home: {
    composes: [
      'text-center',
      'flex-columns',
      'flex-center',
      'items-center',
      'is-full-layout',
    ],
  },
});

const StartViewComponent = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <Layout id="home">
      <div className={classes.home}>
        <Link className={classes.button} to="/create">
          <span>Create a new language project</span>
        </Link>
      </div>
    </Layout>
  );
};

export default StartViewComponent;
