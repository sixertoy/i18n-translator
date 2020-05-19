import Tippy from '@tippyjs/react';
import classnames from 'classnames';
// import omit from 'lodash.omit';
import PropTypes from 'prop-types';
import React, { useRef } from 'react';
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
  visible,
  ...rest
}) => {
  const classes = useStyles();
  const tooltip = useRef(null);
  const content = component || title;
  // const [shown, setShown] = useState(false);

  const overrides = {
    hideOnClick: !useHover,
    trigger: (!useHover && 'click') || 'mouseenter focus',
  };

  // useEffect(() => {
  //   const shouldHide = !visible && shown;
  //   if (shouldHide) {
  //     tooltip.current.hide();
  //   }
  // }, [shown, visible]);

  return (
    <Tippy
      ref={tooltip}
      interactive
      className={classnames(classes.tooltip, className)}
      content={content}
      placement="bottom"
      zIndex={999999999}
      // onShown={() => setShown(true)}
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
  visible: false,
};

TooltipComponent.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  component: PropTypes.element,
  title: PropTypes.string,
  useHover: PropTypes.bool,
  visible: PropTypes.bool,
};

export default TooltipComponent;
