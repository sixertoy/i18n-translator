import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';
import { AiOutlineDownload as DownloadIcon } from 'react-icons/ai';
import { IoIosSave as DiskIcon } from 'react-icons/io';
import { createUseStyles } from 'react-jss';

import Button from '../../../commons/button';
import Dropdown from '../../../commons/dropdown';
import MonacoEditor from '../../../commons/monaco-editor';
import useStep from '../use-step';
import EditorMenu from './menu';

const useStyles = createUseStyles({
  container: {
    composes: ['flex-rows', 'mt24', 'is-relative'],
    height: '100%',
    width: '100%',
  },
  controls: {
    composes: ['flex-columns', 'flex-end', 'items-center', 'mt12'],
    width: '100%',
  },
  editor: {
    borderRadius: 3,
    boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.05)',
  },
  submit: {
    '&:hover': {
      background: 'rgba(0, 0, 0, 0.2)',
    },
    background: '#FFFFFF',
    border: '1px solid rgba(0, 0, 0, 0.2)',
    color: '#000000',
    composes: ['ml7', 'is-block', 'fs18', 'py12', 'px24'],
    transition:
      'color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out',
  },
});

const StepContentComponent = ({ index }) => {
  const classes = useStyles();
  const { draft, onStepChange } = useStep(index);
  const [content, setContent] = useState(draft.content);

  const onEditorHandler = useCallback(value => {
    setContent(value);
  }, []);

  const onImportHandler = useCallback(value => {
    setContent(value);
  }, []);

  const onSubmit = useCallback(() => {
    onStepChange({ content });
  }, [content, onStepChange]);

  return (
    <div className={classes.container} id="step-editor">
      <MonacoEditor
        className={classes.editor}
        content={content}
        onChange={onEditorHandler}
      />
      <div className={classes.controls}>
        <Dropdown
          content={<EditorMenu onChange={onImportHandler} />}
          icon={DownloadIcon}
          label="Importer"
        />
        <button className={classes.submit} type="button" onClick={onSubmit}>
          <span>Continuer</span>
          <DiskIcon className="ml7" />
        </button>
      </div>
    </div>
  );
};

StepContentComponent.propTypes = {
  index: PropTypes.number.isRequired,
};

export default StepContentComponent;
