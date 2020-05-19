import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';
import {
  AiOutlineDeliveredProcedure as ChevronIcon,
  AiOutlineDownload as DownloadIcon,
} from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

// import { toast } from 'react-toastify';
import { selectProject } from '../../../../redux/selectors';
import Button from '../../../commons/button';
import Dropdown from '../../../commons/dropdown';
// import CodeEditor from '../../../commons/code-editor';
import MonacoEditor from '../../../commons/monaco-editor';
import EditorMenu from './menu';
import { createEditorDefaultValue } from './utils';

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
  editor: ({ theme }) => ({
    borderRadius: theme.radius.small,
    boxShadow: '0 0 5px 0 rgba(0, 0, 0, 0.05)',
  }),
  submit: {
    composes: ['ml7'],
  },
});

const StepEditorComponent = ({ draft, onSubmit }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const { id } = useParams();

  const project = useSelector(state => selectProject(state, id));
  const blank = createEditorDefaultValue(project.keys);

  const update = draft.content || blank;
  const [content, setContent] = useState(update);
  // const [disabled, setDisabled] = useState(!update);
  // const [forceEditorUpdate, setForceEditorUpdate] = useState(false);

  // const onEditorHandler = useCallback(
  //   (editor, errs = []) => {
  //     const isEqual = editor === content;
  //     const hasError = errs && errs.length;
  //     const isEmpty = !editor || editor.trim() === '';
  //     const isDisabled = Boolean(hasError || isEmpty);
  //     if (hasError) errs.forEach(m => toast.error(m));
  //     setDisabled(isDisabled);
  //     if (!isEqual) setContent(editor);
  //     if (forceEditorUpdate) setForceEditorUpdate(false);
  //   },
  //   [content, forceEditorUpdate]
  // );

  const onImportHandler = useCallback(value => {
    setContent(value);
    // setForceEditorUpdate(true);
  }, []);

  const onSubmitHandler = useCallback(() => {
    onSubmit({ ...draft, content });
  }, [content, draft, onSubmit]);

  // NOTE React-Ace documentation
  // https://github.com/ajaxorg/ace/wiki/Configuring-Ace
  // https://github.com/securingsincity/react-ace/blob/master/docs/Ace.md
  return (
    <div className={classes.container} id="step-editor">
      {/* <CodeEditor
        className={classes.editor}
        content={content}
        forceUpdate={forceEditorUpdate}
        mode="json"
        onChange={onEditorHandler}
      /> */}
      <MonacoEditor content={content} />
      <div className={classes.controls}>
        <Dropdown
          content={<EditorMenu onChange={onImportHandler} />}
          icon={DownloadIcon}
          label="Importer"
        />
        <Button
          className={classes.submit}
          // disabled={disabled}
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
