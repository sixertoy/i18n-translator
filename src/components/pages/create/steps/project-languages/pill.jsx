import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';
import {
  AiOutlineCloseCircle as CloseIcon,
  AiOutlineCloudUpload as ImportIcon,
} from 'react-icons/ai';
import { createUseStyles } from 'react-jss';

import { useFile } from '../../../../hooks';

const useStyles = createUseStyles({
  pill: {
    '& .button': {
      display: 'block',
      paddingBottom: 5,
      paddingTop: 5,
      width: 'auto',
    },
    '& .icon': {
      display: 'block',
      paddingBottom: 5,
      paddingTop: 5,
    },
    '& .spacer': {
      borderLeft: '1px solid #000',
      display: 'block',
      height: 13,
    },
    '&.selected': {
      background: '#D94865',
    },
    '&.selected .button, &.selected .icon': {
      color: '#FFF',
      fontWeight: 'bold',
    },
    '&.selected .spacer': {
      borderLeft: '1px solid #FFF',
    },
    background: '#EBEBEB',
    borderRadius: 20,
    color: '#000',
    composes: [
      'py5',
      'px12',
      'text-center',
      'mr12',
      'no-overflow',
      'flex-columns',
      'flex-around',
      'items-center',
    ],
  },
});

const LanguagePillComponent = React.memo(({ data, onChange }) => {
  const classes = useStyles();
  const { label, value } = data;
  const { json, ref: upload, reset } = useFile();
  const [selected, setSelected] = useState(false);

  const onUploadHandler = useCallback(() => {
    if (selected && json) {
      const next = !selected;
      reset();
      setSelected(next);
      onChange(value, next, null);
    } else {
      upload.current.click();
    }
  }, [json, onChange, reset, selected, upload, value]);

  const onClick = useCallback(() => {
    const next = !selected;
    setSelected(next);
    onChange(value, next, null);
  }, [onChange, selected, value]);

  useEffect(() => {
    if (json && !selected) {
      const next = true;
      setSelected(next);
      onChange(value, next, json);
    }
  }, [json, onChange, selected, value]);

  return (
    <div className={classnames(classes.pill, { selected })}>
      <input
        ref={upload}
        accept=".json,application/json"
        className="is-hidden"
        type="file"
      />
      <button key={value} className="button" type="button" onClick={onClick}>
        <span>{label}</span>
      </button>
      <span className="spacer" />
      <button className="icon" type="button" onClick={onUploadHandler}>
        {selected && <CloseIcon />}
        {!selected && <ImportIcon />}
      </button>
    </div>
  );
});

LanguagePillComponent.propTypes = {
  data: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default LanguagePillComponent;
