import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  container: {},
});

const ErrorViewComponent = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <h3>
        <span>404</span>
      </h3>
      <h5>
        <span>Page not found</span>
      </h5>
      <p>There isn&apos;t a GitHub Pages site here.</p>
      <p>
        If you&apos;re trying to publish one, read the full documentation to
        learn how to set up GitHub Pages for your repository, organization, or
        user account.
      </p>
    </div>
  );
};

export default ErrorViewComponent;
