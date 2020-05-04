import React, { useEffect, useState } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';

import { selectPrimaryKeys } from '../../redux/selectors';

const useStyles = createUseStyles(theme => ({
  button: {
    borderRadius: 4,
    composes: ['py20', 'px32', 'debug'],
    textAlign: 'center',
  },
  container: {
    composes: [
      'text-center',
      'flex-columns',
      'flex-center',
      'items-center',
      'debug',
      'is-full-layout',
    ],
  },
}));

const StartComponent = () => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const keys = useSelector(selectPrimaryKeys);

  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    const shouldRedirect = keys && keys.length > 0;
    if (shouldRedirect) setRedirect(true);
  }, [keys]);

  return (
    <React.Fragment>
      {redirect && <Redirect to="/board" />}
      {!redirect && (
        <div className={classes.container}>
          <Link className={classes.button} to="/add">
            <span>Create a new language project</span>
          </Link>
        </div>
      )}
    </React.Fragment>
  );
};

StartComponent.defaultProps = {};

StartComponent.propTypes = {};

export default StartComponent;
