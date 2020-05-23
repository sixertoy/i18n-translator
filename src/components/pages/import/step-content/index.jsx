import PropTypes from 'prop-types';
import React, { useCallback, useState } from 'react';
import {
  AiOutlineDeliveredProcedure as ChevronIcon,
  AiOutlineDownload as DownloadIcon,
} from 'react-icons/ai';
import { createUseStyles, useTheme } from 'react-jss';

// import { toast } from 'react-toastify';
import Button from '../../../commons/button';
import Dropdown from '../../../commons/dropdown';
import MonacoEditor from '../../../commons/monaco-editor';
import useStep from '../use-step';
import EditorMenu from './menu';
// import { createEditorDefaultValue } from './utils';

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

const StepContentComponent = ({ index }) => {
  const theme = useTheme();
  const classes = useStyles({ theme });
  const { draft, onStepChange } = useStep(index);
  const [content, setContent] = useState(draft.content);

  const onEditorHandler = useCallback(value => {
    // const isEqual = value === content;
    // const hasError = errs && errs.length;
    // const isEmpty = !value || value.trim() === '';
    // const isDisabled = Boolean(hasError || isEmpty);
    // if (hasError) errs.forEach(m => toast.error(m));
    // setDisabled(isDisabled);
    // if (isEqual) return;
    setContent(value);
  }, []);

  const onImportHandler = useCallback(value => {
    setContent(value);
  }, []);

  const onSubmit = useCallback(() => {
    onStepChange({ content });
  }, [content, onStepChange]);

  return (
    <div className={classes.container} id="step-editor">
      <MonacoEditor
        className={classes.editor}
        content={content}
        // disabled={disabled}
        onChange={onEditorHandler}
      />
      <div className={classes.controls}>
        <Dropdown
          content={<EditorMenu onChange={onImportHandler} />}
          icon={DownloadIcon}
          label="Importer"
        />
        <Button className={classes.submit} onClick={onSubmit}>
          <span>Continuer</span>
          <ChevronIcon className="ml7" />
        </Button>
      </div>
    </div>
  );
};

StepContentComponent.propTypes = {
  index: PropTypes.number.isRequired,
};

export default StepContentComponent;
