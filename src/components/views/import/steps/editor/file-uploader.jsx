import PropTypes from 'prop-types';
import React, { useCallback, useEffect } from 'react';
import { AiOutlineArrowRight as ArrowIcon } from 'react-icons/ai';

import { useFile } from '../../../../hooks';

const FileUploadComponent = React.memo(({ disabled, onChange }) => {
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
        className="use-pointer py12 px24 mt12 ml12"
        disabled={disabled}
        type="button"
        onClick={onUploadHandler}>
        <span>Importer un fichier</span>
        <ArrowIcon className="ml7" />
      </button>
    </React.Fragment>
  );
});

FileUploadComponent.propTypes = {
  disabled: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default FileUploadComponent;
