import Tippy from '@tippyjs/react';
import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  tooltip: {
    borderLeft: '0 !important',
    borderRadius: '4px !important',
    borderRight: '0 !important',
    borderTop: '0 !important',
    left: '0 !important',
    padding: 7,
  },
});

const TooltipComponent = ({ children, component: Component, ...props }) => {
  const classes = useStyles();
  return (
    <Tippy
      hideOnClick
      interactive
      className={classes.tooltip}
      content={Component}
      placement="bottom"
      trigger="click"
      zIndex={999999999}
      {...props}>
      {children}
    </Tippy>
  );
};

TooltipComponent.propTypes = {
  children: PropTypes.node.isRequired,
  component: PropTypes.element.isRequired,
};

export default TooltipComponent;
