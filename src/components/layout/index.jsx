import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';

import ApplicationFooter from './footer';
import ApplicationHeader from './header';

const useStyles = createUseStyles({
  view: {
    composes: ['flex-1'],
    height: 'auto',
  },
});

const LayoutComponent = React.memo(
  ({ children, id }) => {
    const classes = useStyles();
    return (
      <React.Fragment>
        <ApplicationHeader />
        <div className={classes.view} id={`${id}-view`}>
          {children}
        </div>
        <ApplicationFooter />
      </React.Fragment>
    );
  },
  ({ id: prev }, { id: next }) => prev === next
);

LayoutComponent.propTypes = {
  children: PropTypes.node.isRequired,
  id: PropTypes.string.isRequired,
};

export default LayoutComponent;
