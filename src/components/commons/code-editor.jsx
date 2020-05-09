import 'ace-builds';
import 'ace-builds/webpack-resolver';
import 'ace-builds/src-min-noconflict/ace';
import 'ace-builds/src-min-noconflict/mode-json';
import 'ace-builds/src-min-noconflict/mode-javascript';
import 'ace-builds/src-min-noconflict/theme-github';

import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import AceEditor from 'react-ace';

const PLACEHOLDER_VALUE =
  '// Put your JSON code to start working with your translations';

const CodeEditorComponent = ({ content, mode, onChange }) => {
  const [valid, setValid] = useState(false);
  const [value, setValue] = useState(content);
  useEffect(() => {
    onChange(value, valid);
  }, [value, valid, onChange]);
  return (
    <AceEditor
      focus
      highlightActiveLine
      showGutter
      wrapEnabled
      editorProps={{ $blockScrolling: true }}
      height="100%"
      mode={mode}
      name="code-editor"
      placeholder={PLACEHOLDER_VALUE}
      readOnly={false}
      showPrintMargin={false}
      tabSize={2}
      theme="github"
      value={value || ''}
      width="100%"
      onChange={editor => {
        setValue(editor);
      }}
      onValidate={annotations => {
        const errors = annotations.filter(({ type }) => type === 'error');
        setValid(!errors || !errors.length);
      }}
    />
  );
};

CodeEditorComponent.defaultProps = {
  content: null,
  mode: 'json',
};

CodeEditorComponent.propTypes = {
  content: PropTypes.string,
  mode: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default CodeEditorComponent;
