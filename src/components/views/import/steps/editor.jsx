import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { AiOutlineArrowRight as ArrowIcon } from 'react-icons/ai';
import { createUseStyles } from 'react-jss';

import CodeEditor from '../../../commons/code-editor';

const useStyles = createUseStyles({
  button: {
    composes: ['use-pointer'],
  },
  container: {
    height: '100%',
    width: '100%',
  },
  wrapper: {
    composes: ['text-right'],
  },
});

const EditorStepComponent = ({ onSubmit, value }) => {
  const classes = useStyles();
  const [content, setContent] = useState(value || '');
  const [disabled, setDisabled] = useState(true);

  return (
    <div className={classes.container}>
      <CodeEditor
        content={content}
        mode="json"
        onChange={(editor, valid) => {
          const isvalid = valid && editor && editor.trim() !== '';
          setDisabled(!isvalid);
          setContent(editor);
        }}
      />
      <div className={classes.wrapper}>
        <button
          className={classes.button}
          disabled={disabled}
          type="button"
          onClick={() => onSubmit(content)}>
          <span>Créer</span>
          <ArrowIcon />
        </button>
      </div>
    </div>
  );
};

EditorStepComponent.defaultProps = {
  value: null,
};

EditorStepComponent.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default EditorStepComponent;
