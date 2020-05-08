import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { AiOutlineArrowRight as ArrowIcon } from 'react-icons/ai';
import { createUseStyles } from 'react-jss';

import CodeEditor from '../../../commons/code-editor';

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
      <div className={classes.controls}>
        <button
          className={classes.button}
          type="button"
          onClick={() => onClick('{}')}>
          <span>Créer un language vide</span>
          <ArrowIcon className={classes.icon} />
        </button>
        <button
          className={classes.button}
          disabled={disabled}
          type="button"
          onClick={() => onClick(content)}>
          <span>Continuer</span>
          <ArrowIcon className={classes.icon} />
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
