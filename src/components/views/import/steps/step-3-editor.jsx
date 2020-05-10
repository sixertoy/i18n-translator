import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { AiOutlineArrowRight as ArrowIcon } from 'react-icons/ai';
import { createUseStyles } from 'react-jss';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { EDITOR_DEFAULT_CONTENT } from '../../../../constants';
import { selectLimits } from '../../../../redux/selectors';
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

const StepEditorComponent = ({ onClick, value }) => {
  const classes = useStyles();
  const [disabled, setDisabled] = useState(true);
  const [content, setContent] = useState(value || EDITOR_DEFAULT_CONTENT);

  const { id } = useParams();
  const { hasReach, limited } = useSelector(state => selectLimits(state, id));
  const isLocked = limited && hasReach;

  return (
    <div className={classes.container}>
      <CodeEditor
        content={content}
        disabled={isLocked}
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
          disabled={isLocked}
          type="button"
          onClick={() => onClick('{}')}>
          <span>Créer un language vide</span>
          <ArrowIcon className={classes.icon} />
        </button>
        <button
          className={classes.button}
          disabled={isLocked || disabled}
          type="button"
          onClick={() => onClick(content)}>
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
