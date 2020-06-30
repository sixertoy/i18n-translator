import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles } from 'react-jss';

import Tooltip from './tooltip';

const useStyles = createUseStyles({
  button: {
    background: '#FFFFFF',
    border: '1px solid rgba(0, 0, 0, 0.2)',
    color: '#000000',
    composes: ['is-block', 'fs18', 'py12', 'px24'],
    height: '100%',
    textAlign: 'center',
    width: 200,
  },
  dropdown: {
    width: 200,
  },
  tooltip: {
    borderRadius: 3,
    width: 200,
  },
});

const DropdownComponent = React.memo(
  ({ content: Content, icon: Icon, label }) => {
    const classes = useStyles();
    return (
      <div className={classes.dropdown}>
        <Tooltip
          useHover
          animation="shift-away-subtle"
          arrow={false}
          className={classes.tooltip}
          content={Content}
          maxWidth={250}
          offset={[0, 1]}
          placement="top"
          theme="light">
          <button className={classes.button}>
            {label && <span>{label}</span>}
            {Icon && <Icon className="ml7" />}
          </button>
        </Tooltip>
      </div>
    );
  }
);

DropdownComponent.defaultProps = {
  icon: null,
  label: null,
};

DropdownComponent.propTypes = {
  content: PropTypes.shape().isRequired,
  icon: PropTypes.func,
  label: PropTypes.string,
};

export default DropdownComponent;
