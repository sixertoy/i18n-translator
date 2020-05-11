import Tippy from '@tippyjs/react';
import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  tooltip: {
    borderLeft: '0 !important',
    borderRadius: '18px !important',
    borderRight: '0 !important',
    borderTop: '0 !important',
    left: '0 !important',
    padding: 7,
  },
});

const TooltipComponent = ({
  children,
  className,
  component,
  onClickOutside,
  title,
  ...props
}) => {
  const classes = useStyles();
  const content = (React.isValidElement(component) && component) || title;
  const mergedProps = { ...props };
  // if (!onClickOutside) {
  //   mergedProps.trigger = 'click';
  //   mergedProps.hideOnClick = true;
  //   mergedProps.onClickOutside = true;
  // }
  return (
    <Tippy
      hideOnClick
      interactive
      className={classnames(classes.tooltip, className)}
      content={content}
      placement="bottom"
      trigger="click"
      zIndex={999999999}
      {...mergedProps}>
      {children}
    </Tippy>
  );
};

TooltipComponent.defaultProps = {
  className: '',
  component: null,
  onClickOutside: null,
  title: null,
};

TooltipComponent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  component: PropTypes.element,
  onClickOutside: PropTypes.func,
  title: PropTypes.string,
};

export default TooltipComponent;
