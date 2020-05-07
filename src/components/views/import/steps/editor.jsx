import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { AiOutlineArrowRight as ArrowIcon } from 'react-icons/ai';
import { createUseStyles } from 'react-jss';

import CodeEditor from '../../../commons/code-editor';

const useStyles = createUseStyles({
  button: {
    composes: ['use-pointer', 'py12', 'px24', 'mt12'],
  },
  container: {
    composes: ['flex-rows'],
    height: '100%',
    width: '100%',
  },
  wrapper: {
    composes: ['text-right'],
  },
});

const EditorStepComponent = ({ onClick, value }) => {
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
          onClick={() => onClick(content)}>
          <span>Continuer</span>
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
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default EditorStepComponent;
