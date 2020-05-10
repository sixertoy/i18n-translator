import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import { AiOutlineArrowRight as ArrowIcon } from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';

import { EDITOR_DEFAULT_CONTENT } from '../../../../../constants';

const useStyles = createUseStyles({
  button: {
    composes: ['use-pointer', 'py12', 'px24', 'mt12', 'ml12'],
  },
  icon: {
    composes: ['ml7'],
  },
});

const InsertTemplateComponent = React.memo(({ disabled, onChange }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  const onClick = useCallback(() => {
    onChange(EDITOR_DEFAULT_CONTENT);
  }, [onChange]);

  return (
    <button
      className={classes.button}
      disabled={disabled}
      type="button"
      onClick={onClick}>
      <span>Importer un template</span>
      <ArrowIcon className={classes.icon} />
    </button>
  );
});

InsertTemplateComponent.defaultProps = {};

InsertTemplateComponent.propTypes = {
  disabled: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InsertTemplateComponent;
