import classnames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { createUseStyles, useTheme } from 'react-jss';

import { useButtonStyles } from '../styles';
import Tooltip from './tooltip';

const useStyles = createUseStyles({
  button: {
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
    const theme = useTheme();
    const classes = useStyles({ theme });
    const buttonClasses = useButtonStyles({ theme });
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
          theme="material">
          <span className={classnames(buttonClasses.btn, classes.button)}>
            {label && <span>{label}</span>}
            {Icon && <Icon className="ml7" />}
          </span>
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
