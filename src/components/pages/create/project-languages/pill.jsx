import classnames from 'classnames';
import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';
import { AiOutlineCloseCircle as CloseIcon } from 'react-icons/ai';
import { createUseStyles } from 'react-jss';

import FileUploader from './file-uploader';

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
      fontSize: 16,
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
  const [json, setJSON] = useState(null);
  const [selected, setSelected] = useState(false);

  const onUploadSuccess = useCallback(content => {
    setJSON(content);
    setSelected(true);
    // onChange(value, true, content);
  }, []);

  const onResetHandler = useCallback(() => {
    setJSON(null);
    // onChange(value, selected, null);
  }, []);

  const onClick = useCallback(() => {
    const nextSelected = !selected;
    setSelected(nextSelected);
    const nextJSON = !selected ? json : null;
    setJSON(nextJSON);
    onChange(value, nextSelected, json);
  }, [json, onChange, selected, value]);

  return (
    <div className={classnames(classes.pill, { selected })}>
      <button key={value} className="button" type="button" onClick={onClick}>
        <span>{label}</span>
      </button>
      <span className="spacer" />
      {!json && (
        <FileUploader name={`field_${value}`} onSuccess={onUploadSuccess} />
      )}
      {json && (
        <button className="icon" type="button" onClick={onResetHandler}>
          <CloseIcon />
        </button>
      )}
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
