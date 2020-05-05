import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { Link } from 'react-router-dom';
import { Tooltip } from 'react-tippy';

const useStyles = createUseStyles({
  link: ({ theme }) => ({
    color: theme.font,
    composes: ['fs24', 'ml7'],
  }),
  tooltip: {},
});

const TooltipComponent = ({ icon: Icon, path, style, title }) => {
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
      position="bottom"
      style={{ fontSize: 8 }}
      title={title}>
      <Link className={classes.link} style={style} to={path}>
        <Icon />
      </Link>
    </Tooltip>
  );
};

TooltipComponent.defaultProps = {
  style: {},
};

TooltipComponent.propTypes = {
  icon: PropTypes.func.isRequired,
  path: PropTypes.string.isRequired,
  style: PropTypes.shape(),
  title: PropTypes.string.isRequired,
};

export default TooltipComponent;
