import PropTypes from 'prop-types';
import React, { useCallback, useEffect } from 'react';
import { AiOutlineArrowRight as ArrowIcon } from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';

import { useFile } from '../../../../hooks';

const useStyles = createUseStyles({
  button: {
    composes: ['use-pointer', 'py12', 'px24', 'mt12', 'ml12'],
  },
  icon: {
    composes: ['ml7'],
  },
});

const FileUploadComponent = React.memo(({ disabled, onChange }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  const { json, ref: upload } = useFile();

  const onUploadHandler = useCallback(() => {
    upload.current.click();
  }, [upload]);

  useEffect(() => {
    if (json) {
      onChange(json);
    }
  }, [json, onChange]);

  return (
    <React.Fragment>
      <input
        ref={upload}
        accept=".json,application/json"
        className="is-hidden"
        disabled={disabled}
        type="file"
      />
      <button
        className={classes.button}
        disabled={disabled}
        type="button"
        onClick={onUploadHandler}>
        <span>Importer un fichier</span>
        <ArrowIcon className={classes.icon} />
      </button>
    </React.Fragment>
  );
});

FileUploadComponent.propTypes = {
  disabled: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FileUploadComponent;
