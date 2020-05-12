import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';
import {
  AiOutlineDeliveredProcedure as ChevronIcon,
  AiOutlineDownload as DownloadIcon,
} from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';

import Button from '../../../commons/button';
import CodeEditor from '../../../commons/code-editor';
import Dropdown from '../../../commons/dropdown';
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

const StepEditorComponent = ({ onSubmit, value }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });

  const [content, setContent] = useState(value);
  const [disabled, setDisabled] = useState(true);
  const [forceEditorUpdate, setForceEditorUpdate] = useState(false);

  const onEditorChange = useCallback((editor, valid) => {
    const isvalid = valid && editor && editor.trim() !== '';
    setForceEditorUpdate(false);
    setDisabled(!isvalid);
    setContent(editor);
  }, []);

  const onImportContent = useCallback(next => {
    setContent(next);
    setForceEditorUpdate(true);
  }, []);

  const onSubmitHandler = useCallback(() => {
    onSubmit(content);
  }, [content, onSubmit]);

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
        onChange={onEditorChange}
      />
      <div className={classes.controls}>
        <Dropdown
          content={<EditorMenu onChange={onImportContent} />}
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

StepEditorComponent.defaultProps = {
  value: null,
};

StepEditorComponent.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  value: PropTypes.string,
};

export default StepEditorComponent;