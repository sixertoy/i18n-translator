import Tippy from '@tippyjs/react';
import classnames from 'classnames';
// import omit from 'lodash.omit';
import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  tooltip: {
    border: 0,
    borderRadius: 18,
    composes: ['p7'],
    left: 0,
  },
});

const TooltipComponent = ({
  children,
  className,
  component,
  title,
  useHover,
  ...rest
}) => {
  const classes = useStyles();
  const content = component || title;

  const overrides = {
    hideOnClick: !useHover,
    trigger: (!useHover && 'click') || 'mouseenter focus',
  };

  return (
    <Tippy
      interactive
      className={classnames(classes.tooltip, className)}
      content={content}
      placement="bottom"
      zIndex={999999999}
      {...overrides}
      {...rest}>
      {children}
    </Tippy>
  );
};

TooltipComponent.defaultProps = {
  className: '',
  component: null,
  title: null,
  useHover: false,
};

TooltipComponent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  component: PropTypes.element,
  title: PropTypes.string,
  useHover: PropTypes.bool,
};

export default TooltipComponent;
