import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tippy';

const useStyles = createUseStyles({
  button: ({ theme }) => ({
    background: 'none',
    color: theme.font,
    composes: ['fs24', 'ml7'],
  }),
  link: ({ theme }) => ({
    color: theme.font,
    composes: ['fs24', 'ml7'],
  }),
  tooltip: {},
});

const TooltipComponent = ({ callback, icon: Icon, path, style, title }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  return (
    <Tooltip
      // trigger="click"
      // hideOnClick={false}
      key={title}
      arrow
      arrowSize="small"
      className={classes.tooltip}
      distance={(callback && 20) || 10}
      position="bottom"
      style={{ fontSize: 8 }}
      title={title}>
      {callback && (
        <button className={classes.button} type="button">
          <Icon />
        </button>
      )}
      {path && (
        <Link className={classes.link} style={style} to={path}>
          <Icon />
        </Link>
      )}
    </Tooltip>
  );
};

TooltipComponent.defaultProps = {
  callback: () => {},
  path: null,
  style: {},
};

TooltipComponent.propTypes = {
  callback: PropTypes.func,
  icon: PropTypes.func.isRequired,
  path: PropTypes.string,
  style: PropTypes.shape(),
  title: PropTypes.string.isRequired,
};

export default TooltipComponent;
