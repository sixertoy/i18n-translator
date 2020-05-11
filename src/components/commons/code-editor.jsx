import 'ace-builds';
import 'ace-builds/webpack-resolver';
import 'ace-builds/src-min-noconflict/ace';
import 'ace-builds/src-min-noconflict/mode-json';
import 'ace-builds/src-min-noconflict/mode-javascript';
import 'ace-builds/src-min-noconflict/theme-github';

import PropTypes from 'prop-types';
import React, { useRef, useState } from 'react';
import AceEditor from 'react-ace';

const PLACEHOLDER_VALUE =
  '// Put your JSON code to start working with your translations';

const CodeEditorComponent = ({
  className,
  content,
  disabled,
  mode,
  onChange,
}) => {
  const editor = useRef(null);
  const [valid, setValid] = useState(false);

  return (
    <AceEditor
      ref={editor}
      focus
      highlightActiveLine
      showGutter
      wrapEnabled
      className={className}
      editorProps={{ $blockScrolling: true }}
      height="100%"
      mode={mode}
      name="code-editor"
      placeholder={PLACEHOLDER_VALUE}
      readOnly={disabled}
      showPrintMargin={false}
      tabSize={2}
      theme="github"
      value={content || ''}
      width="100%"
      onChange={value => onChange(value, valid)}
      onValidate={annotations => {
        const errors = annotations.filter(({ type }) => type === 'error');
        setValid(!errors || !errors.length);
      }}
    />
  );
};

CodeEditorComponent.defaultProps = {
  className: '',
  content: null,
  disabled: false,
  mode: 'json',
};

CodeEditorComponent.propTypes = {
  className: PropTypes.string,
  content: PropTypes.string,
  disabled: PropTypes.bool,
  mode: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default CodeEditorComponent;
