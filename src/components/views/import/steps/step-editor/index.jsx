import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';
import {
  AiOutlineDeliveredProcedure as ChevronIcon,
  AiOutlineDownload as DownloadIcon,
} from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';

import Button from '../../../../commons/button';
import CodeEditor from '../../../../commons/code-editor';
import Dropdown from '../../../../commons/dropdown';
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
    maxWidth: theme.sizes.editor,
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

  const onEditorChange = useCallback((editor, valid) => {
    const isvalid = valid && editor && editor.trim() !== '';
    setDisabled(!isvalid);
    setContent(editor);
  }, []);

  const updatContentHandler = useCallback(next => {
    setContent(next);
  }, []);

  const onSubmitHandler = useCallback(() => {
    onSubmit(content);
  }, [content, onSubmit]);

  return (
    <div className={classes.container} id="step-editor">
      <CodeEditor
        className={classes.editor}
        content={content}
        mode="json"
        onChange={onEditorChange}
      />
      <div className={classes.controls}>
        <Dropdown
          content={<EditorMenu onChange={updatContentHandler} />}
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
