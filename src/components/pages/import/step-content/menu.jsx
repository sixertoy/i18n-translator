import PropTypes from 'prop-types';
import React, { useCallback, useEffect } from 'react';
import {
  AiFillFileText as FileIcon,
  AiFillFolderOpen as FolderIcon,
} from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';

import { EDITOR_DEFAULT_CONTENT } from '../../../../constants';
import { useFile } from '../../../hooks';

const useStyles = createUseStyles({
  button: {
    borderRadius: 0,
    color: '#000000',
    composes: [
      'is-block',
      'no-background',
      'flex-columns',
      'flex-between',
      'items-center',
    ],
    height: 40,
    width: '100%',
  },
  menu: {},
  splitter: {
    background: '#000000',
    border: 0,
    composes: ['is-block'],
    height: 1,
    opacity: 0.15,
  },
});

const EditorMenuComponent = React.memo(({ onChange }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const { json, ref: upload } = useFile();

  const onUploadHandler = useCallback(() => {
    upload.current.click();
  }, [upload]);

  const onTemplateHandler = useCallback(() => {
    onChange(EDITOR_DEFAULT_CONTENT);
  }, [onChange]);

  useEffect(() => {
    if (json) onChange(json);
  }, [json, onChange]);

  return (
    <div className={classes.menu}>
      <input
        ref={upload}
        accept=".json,application/json"
        className="is-hidden"
        type="file"
      />
      <button
        className={classes.button}
        type="button"
        onClick={onUploadHandler}>
        <span>Importer un fichier</span>
        <FolderIcon />
      </button>
      <hr className={classes.splitter} />
      <button
        className={classes.button}
        type="button"
        onClick={onTemplateHandler}>
        <span>Importer un template</span>
        <FileIcon />
      </button>
    </div>
  );
});

EditorMenuComponent.propTypes = {
  onChange: PropTypes.func.isRequired,
};

export default EditorMenuComponent;
