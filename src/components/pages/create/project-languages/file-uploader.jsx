import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import { AiOutlineCloudUpload as ImportIcon } from 'react-icons/ai';

const FileUploadComponent = React.memo(({ name, onError, onSuccess }) => {
  const onUploadChange = useCallback(
    evt => {
      evt.preventDefault();
      try {
        const [file] = evt.target.files;
        const reader = new FileReader();
        reader.onload = e => {
          const json = e.target.result;
          if (onSuccess) onSuccess(json);
        };
        // reader.onabort = () => {}
        // reader.onerror = () => {}
        // reader.onloadend = () => {}
        // reader.onloadstart = () => {}
        reader.readAsText(file);
      } catch (error) {
        if (onError) onError(error);
      }
    },
    [onError, onSuccess]
  );

  return (
    <div className="icon">
      <label className="" htmlFor={name}>
        <ImportIcon />
      </label>
      <input
        accept=".json,application/json"
        className="is-hidden"
        id={name}
        name={name}
        type="file"
        onChange={onUploadChange}
      />
    </div>
  );
});

FileUploadComponent.defaultProps = {
  onError: null,
};

FileUploadComponent.propTypes = {
  name: PropTypes.string.isRequired,
  onError: PropTypes.func,
  onSuccess: PropTypes.func.isRequired,
};

export default FileUploadComponent;
