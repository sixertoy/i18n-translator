import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';
import { AiOutlineArrowRight as ArrowIcon } from 'react-icons/ai';
import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { EDITOR_DEFAULT_CONTENT } from '../../../../constants';
import { selectLimits } from '../../../../redux/selectors';
import CodeEditor from '../../../commons/code-editor';
import FileUploader from './editor/file-uploader';

const useStyles = createUseStyles({
  button: {
    composes: ['use-pointer', 'py12', 'px24', 'mt12', 'ml12'],
  },
  container: {
    composes: ['flex-rows'],
    height: '100%',
    width: '100%',
  },
  controls: {
    composes: ['flex-columns', 'flex-end', 'items-center'],
  },
  icon: {
    composes: ['ml7'],
  },
  infos: {
    composes: ['is-italic', 'fs10'],
  },
});

const StepEditorComponent = ({ onClick, value }) => {
  const { id } = useParams();
  const classes = useStyles();

  const [content, setContent] = useState(value);
  const [disabled, setDisabled] = useState(true);

  const { hasReach, limited } = useSelector(state => selectLimits(state, id));
  const isLocked = limited && hasReach;

  const onUploadHandler = useCallback(json => {
    setContent(json);
  }, []);

  const onTemplateHandler = useCallback(() => {
    setContent(EDITOR_DEFAULT_CONTENT);
  }, []);

  const onEmptyHandler = useCallback(() => {
    onClick('{}');
  }, [onClick]);

  const onContinueHandler = useCallback(() => {
    onClick(content);
  }, [content, onClick]);

  const onEditorChange = useCallback((editor, valid) => {
    const isvalid = valid && editor && editor.trim() !== '';
    setDisabled(!isvalid);
    setContent(editor);
  }, []);

  return (
    <div className={classes.container}>
      <CodeEditor
        content={content}
        disabled={isLocked}
        mode="json"
        onChange={onEditorChange}
      />
      <div className={classes.controls}>
        <FileUploader disabled={isLocked} onChange={onUploadHandler} />
        <button
          className={classes.button}
          disabled={isLocked}
          type="button"
          onClick={onTemplateHandler}>
          <span>Importer un template</span>
          <ArrowIcon className={classes.icon} />
        </button>
        <button
          className={classes.button}
          disabled={isLocked}
          type="button"
          onClick={onEmptyHandler}>
          <span>Créer un language vide</span>
          <ArrowIcon className={classes.icon} />
        </button>
        <button
          className={classes.button}
          disabled={isLocked || disabled}
          type="button"
          onClick={onContinueHandler}>
          <span>Continuer</span>
          <ArrowIcon className={classes.icon} />
        </button>
      </div>
    </div>
  );
};

StepEditorComponent.defaultProps = {
  value: null,
};

StepEditorComponent.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default StepEditorComponent;
