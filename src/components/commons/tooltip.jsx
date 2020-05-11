import Tippy from '@tippyjs/react';
import classnames from 'classnames';
// import omit from 'lodash.omit';
import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';

// .tippy-tooltip {
//   background-color: #333333DD;
// }
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
  useClick,
  ...overrides
}) => {
  const classes = useStyles();
  const content = component || title;
  // const override = omit(props, ['useClick']);
  // let config = {};
  // if (useClick) {
  //   config = {
  //     hideOnClick: true,
  //     onClickOutside: true,
  //     trigger: 'click',
  //   };
  // } else {
  //   config = { onClickOutside: false };
  // }
  return (
    <Tippy
      interactive
      className={classnames(classes.tooltip, className)}
      content={content}
      placement="bottom"
      trigger="click"
      zIndex={999999999}
      // {...config}
      {...overrides}>
      {children}
    </Tippy>
  );
};

TooltipComponent.defaultProps = {
  className: '',
  component: null,
  title: null,
  useClick: false,
};

TooltipComponent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  component: PropTypes.element,
  title: PropTypes.string,
  useClick: PropTypes.bool,
};

export default TooltipComponent;
