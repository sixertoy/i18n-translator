import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { selectLimits } from '../../../../redux/selectors';
import CodeEditor from '../../../commons/code-editor';
import SubmitButton from './editor/submit';
import TemplateButton from './editor/template';
import Upload from './editor/upload';

const useStyles = createUseStyles({
  button: {
    composes: ['use-pointer', 'py12', 'px24', 'mt12', 'ml12'],
  },
  container: {
    composes: ['flex-rows', 'items-center'],
    height: '100%',
    width: '100%',
  },
  controls: {
    composes: ['flex-columns', 'flex-end', 'items-center'],
  },
  editor: ({ theme }) => ({
    borderRadius: theme.radius.mall,
    maxWidth: theme.sizes.editor,
  }),
  icon: {
    composes: ['ml7'],
  },
  infos: {
    composes: ['is-italic', 'fs10'],
  },
});

const StepEditorComponent = ({ onSubmit, value }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  const { id } = useParams();

  const [content, setContent] = useState(value);
  const [disabled, setDisabled] = useState(true);

  const { hasReach, limited } = useSelector(state => selectLimits(state, id));
  const isLocked = limited && hasReach;

  const onEditorChange = useCallback((editor, valid) => {
    const isvalid = valid && editor && editor.trim() !== '';
    setDisabled(!isvalid);
    setContent(editor);
  }, []);

  const onUpdateContent = useCallback(next => {
    setContent(next);
  }, []);

  const onContinueHandler = useCallback(() => {
    onSubmit(content);
  }, [content, onSubmit]);

  return (
    <div className={classes.container}>
      <CodeEditor
        className={classes.editor}
        content={content}
        disabled={isLocked}
        mode="json"
        onChange={onEditorChange}
      />
      <div className={classes.controls}>
        <Upload disabled={isLocked} onChange={onUpdateContent} />
        <TemplateButton disabled={isLocked} onChange={onUpdateContent} />
        <SubmitButton
          disabled={isLocked || disabled}
          onClick={onContinueHandler}
        />
      </div>
    </div>
  );
};

StepEditorComponent.defaultProps = {
  value: null,
};

StepEditorComponent.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default StepEditorComponent;
