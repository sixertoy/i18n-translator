import Tippy from '@tippyjs/react';
import classnames from 'classnames';
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

const TooltipComponent = ({
  children,
  className,
  component,
  title,
  ...props
}) => {
  const classes = useStyles();
  const content = (React.isValidElement(component) && component) || title;
  return (
    <Tippy
      hideOnClick
      interactive
      className={classnames(classes.tooltip, className)}
      content={content}
      placement="bottom"
      trigger="click"
      zIndex={999999999}
      {...props}>
      {children}
    </Tippy>
  );
};

TooltipComponent.defaultProps = {
  className: '',
  component: null,
  title: null,
};

TooltipComponent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  component: PropTypes.element,
  title: PropTypes.string,
};

export default TooltipComponent;
