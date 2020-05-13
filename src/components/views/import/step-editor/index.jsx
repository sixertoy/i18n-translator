import PropTypes from 'prop-types';
import React, { useCallback, useEffect, useState } from 'react';
import {
  AiOutlineDeliveredProcedure as ChevronIcon,
  AiOutlineDownload as DownloadIcon,
} from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import { selectProject } from '../../../../redux/selectors';
import Button from '../../../commons/button';
import CodeEditor from '../../../commons/code-editor';
import Dropdown from '../../../commons/dropdown';
import { createEditorDefaultValue } from '../utils';
import EditorMenu from './menu';

const useStyles = createUseStyles({
  container: {
    composes: ['flex-rows'],
    height: '100%',
    width: '100%',
  },
  controls: {
    composes: ['flex-columns', 'flex-end', 'items-center', 'mt12'],
    width: '100%',
  },
  editor: ({ theme }) => ({
    borderRadius: theme.radius.small,
    // maxWidth: theme.sizes.editor,
  }),
  submit: {
    composes: ['ml7'],
  },
});

const StepEditorComponent = ({ draft, onSubmit }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const { id } = useParams();

  const [disabled, setDisabled] = useState(true);
  const [content, setContent] = useState(draft.content);
  const [forceEditorUpdate, setForceEditorUpdate] = useState(false);

  const project = useSelector(state => selectProject(state, id));

  const onImportHandler = useCallback(value => {
    setContent(value);
    setForceEditorUpdate(true);
  }, []);

  const onEditorHandler = useCallback((editor, errors) => {
    const hasErrors = errors && errors.length;
    const isvalid = hasErrors && editor && editor.trim() !== '';
    setForceEditorUpdate(false);
    setDisabled(!isvalid);
    setContent(editor);
  }, []);

  const onSubmitHandler = useCallback(() => {
    onSubmit({ ...draft, content });
  }, [content, draft, onSubmit]);

  useEffect(() => {
    if (!content) {
      const blank = createEditorDefaultValue(project.keys);
      setContent(blank);
      setForceEditorUpdate(true);
    }
  }, [content, id, project, project.keys]);

  // NOTE React-Ace documentation
  // https://github.com/ajaxorg/ace/wiki/Configuring-Ace
  // https://github.com/securingsincity/react-ace/blob/master/docs/Ace.md
  return (
    <div className={classes.container} id="step-editor">
      <CodeEditor
        className={classes.editor}
        content={content}
        forceUpdate={forceEditorUpdate}
        mode="json"
        onChange={onEditorHandler}
      />
      <div className={classes.controls}>
        <Dropdown
          content={<EditorMenu onChange={onImportHandler} />}
          icon={DownloadIcon}
          label="Importer"
        />
        <Button
          className={classes.submit}
          disabled={disabled}
          onClick={onSubmitHandler}>
          <span>Continuer</span>
          <ChevronIcon className="ml7" />
        </Button>
      </div>
    </div>
  );
};

StepEditorComponent.propTypes = {
  draft: PropTypes.shape({
    content: PropTypes.string,
    lang: PropTypes.string,
  }).isRequired,
  onSubmit: PropTypes.func.isRequired,
};

export default StepEditorComponent;
